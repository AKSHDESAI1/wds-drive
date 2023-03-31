import React from "react";

const Work = () => {
  // eslint-disable-next-line
  const workInfoData = [
    {
      // image: PickMeals,
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      // image: ChooseMeals,
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      // image: ChooseMeals,
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    }
   
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>

        <p className="primary-text">
             1. Users can login through email account and then can create folder into 
                the website according to their needs and can upload files into them
            </p>
        
        <p className="primary-text">
             2. users can view or download the files from the web-application
           </p> 

        <p className="primary-text">
             3. Users can access their uploaded files from the WhatsApp bot (the number is mentioned in the
                Help Section)
           </p>
        
      </div>
    </div>
  );
};

export default Work;
