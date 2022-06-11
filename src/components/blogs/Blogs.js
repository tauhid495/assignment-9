import React from 'react';

const Blogs = () => {
    return (
        <div className='md:grid grid-cols-3 gap-10 py-16 px-12'>
            {/* First Question */}
            <div className='border-2 p-4 rounded-lg shadow-lg shadow-cyan-900 sm:mt-16'>
                <p className='pb-2 text-3xl font-semibold text-cyan-900'>Q: What is Context API?</p>
                <img className='rounded-lg pb-2' src="https://joecortopassi.com/images/react_context_diagram.png" alt="" />
                <p className='text-cyan-900'>Answer : React Context API is that way for  React app by which we can effectively produce global variables. This variable can be passed around. This is the alternative of "prop drilling" or moving props from grandparent to child to parent, and so on. Context API is a new feature added in React version no. 16.3 . <br /> In simple words, Context API is React structure that enables us to exchange details and assists in solving prop-drilling from all levels of our application.</p>
            </div>

            {/* Second Question */}
            <div className='border-2 p-4 rounded-lg shadow-lg shadow-cyan-900 sm:mt-10'>
                <p className='pb-2 text-2xl font-semibold text-cyan-900'>Q: What is Semantic Tag?</p>
                <img className='rounded-lg pb-2' src="https://assets.hongkiat.com/uploads/html-5-semantics/document-outline-example.jpg" alt="" />
                <p className='text-cyan-900'>Answer: In HTML a semantic tag is a tag name that clearly describes its purpose and content. HTML5 introduced new several  semantic tags. These include &lt;main&gt; , &lt;aside&gt; , &lt;section&gt; , &lt;article&gt; and others. Semantic tag element clearly describes its meaning to both the browser and the developer. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. </p>

            </div>
            {/* Third Question */}
            <div className='border-2 p-4 rounded-lg shadow-lg shadow-cyan-900 sm:mt-16'>
                <p className='pb-2 text-2xl font-semibold text-cyan-900'>Q: Difference between Inline, Block and Inline-block.</p>
                <img className='rounded-lg pb-2' src="https://th.bing.com/th/id/R.ccf6c41e051fe33178c3cc15d66ade3f?rik=q9TZWjdIz5pj%2fQ&riu=http%3a%2f%2fi.stack.imgur.com%2fmGTYI.png&ehk=sOILON%2be%2fW0UuxbF4oXsL9xcEds7aXVUMpa1CBKYuyY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <p className='text-cyan-900'>Inline - elements that take up only as much space as needed and can fit around other elements on the same line. Height or width don't effect on it. <br />


                    block - A block element will take up the full width available to it by default, which does not allow for other elements to appear on the same line. It starts on a new line. <br />

                    inline-block - Like inline elements but can also have a width and a height to separate itself from nearby elements. Can appear on the same line as other elements by default, though inherits some properties of a block. We can set a width and height.
                </p>
            </div>
        </div >

    );
};

export default Blogs;