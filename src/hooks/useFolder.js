import { useEffect, useReducer } from 'react';
import { doc, getDoc, orderBy, query, where, onSnapshot } from "firebase/firestore";
import db, { database } from '../config/firebase-config';
import { useAuth } from '../Context/AuthContext';


const ACTIONS = {
    SELECT_FOLDER: 'select-folder',
    UPDATE_FOLDER: 'update-folder',
    SET_CHILD_FOLDERS: 'set-child-folders'
}

const ROOT_FOLDER = {
    name: "Root",
    id: null,
    path: []
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SELECT_FOLDER:
            return {
                folderId: action.payload.folderId,
                folder: action.payload.folder,
                childFolders: [],
                childFiles: []
            }

        case ACTIONS.UPDATE_FOLDER:
            return {
                ...state,
                folder: action.payload.folder
            }

        case ACTIONS.SET_CHILD_FOLDERS:
            return {
                ...state,
                childFolders: action.payload.childFolders
            }
        default:
            return state
    }
}

const useFolder = (folderId = null, folder = null) => {
    const { currentUser } = useAuth();

    const [state, dispatch] = useReducer(reducer, {
        folderId,
        folder,
        childFolders: [],
        childFiles: []
    })

    useEffect(() => {
        console.log('first useeffect')
        dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } })
    }, [folderId, folder]);

    useEffect(() => {
        console.log('second useeffect')
        if (folderId == null) {
            return dispatch({
                type: ACTIONS.UPDATE_FOLDER,
                payload: { folder: ROOT_FOLDER }
            })
        }

        const docRef = doc(db, "folders", folderId);
        getDoc(docRef).then((data) => {
            dispatch({
                type: ACTIONS.UPDATE_FOLDER,
                payload: { folder: database.formattedDoc(data) }
            })
        }).catch(() => {
            dispatch({
                type: ACTIONS.UPDATE_FOLDER,
                payload: { folder: ROOT_FOLDER }
            })
        });

    }, [folderId]);

    useEffect(() => {
        const q1 = query(database.folders, where("parentId", "==", folderId), where("userId", "==", currentUser.uid, orderBy('createdAt')));

        return onSnapshot(q1, (doc) => {
            dispatch({
                type: ACTIONS.SET_CHILD_FOLDERS,
                payload: { childFolders: doc.docs.map(database.formattedDoc) }
            })
        })
    }, [folderId, currentUser]);

    return state
}

export default useFolder