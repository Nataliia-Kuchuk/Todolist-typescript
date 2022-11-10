import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
      <div>
        <h4>
          The Best To-Do List Apps for 2022 Organize your life and complete
          tasks more reliably by using the right to-do app.
        </h4>
        <p>
          There's nothing wrong with a paper to-do list, but going digital has
          its benefits. Paper is fine if you enjoy writing by hand, crossing off
          tasks in ink or pencil, and drawing arrows to show when priorities and
          deadlines change. The best to-do list apps, however, let you write,
          organize, and reprioritize your tasks more efficiently. They also let
          you attach notes, links, and files to a task, and the very best ones
          also let you see when someone else has completed a task. In many ways,
          a good to-do program is the ultimate productivity app. To find the
          best to-do list apps, we look for ones that are easy to use, offered
          on all major platforms, and have the tools you need to work
          productively. After considering dozens of apps in this category, these
          are the best we've tested, followed by what to look for when choosing
          the right app for your needs.
            </p>
            <button onClick={()=> navigate('/')} className='btn'>Return to toDo list</button>
      </div>
    );
};

export default AboutPage;