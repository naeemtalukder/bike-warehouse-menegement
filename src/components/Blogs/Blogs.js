import React from 'react';

const Blogs = () => {
    return (

        <div className='container '>
            <h2 className='text-center p-4 color '>Question and Answers</h2>
            <div className='row'>
                <div className='col-lg-6 blogs p-5'>
                    <h5 className='color'>Difference between javascript and node js?</h5>
                    <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine.
                        Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses,
                        it requires libraries that can easily be accessed from JavaScript programming for better use.
                    </p>
                </div>
                <div className='col-lg-6 blogs p-5'>
                    <h5 className='color'>Differences between sql and nosql databases?</h5>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className='col-lg-6 blogs pb-5 px-5'>
                    <h5 className='color'>When should you use node js and when should you use mongodb</h5>
                    <p>ode.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server.
                        It is asynchronous, event-driven and helps to build scalable web applications.
                        Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured.
                        MongoDB represents the data as a collection of documents rather than tables related by foreign keys.
                        This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js.
                        Another option is using CouchDB that also stores the data as JSON/BSON environment.</p>
                </div>
                <div className='col-lg-6 blogs pb-5 px-5'>
                    <h5 className='color'>What is the purpose of jwt and how does it work?</h5>
                    <p>To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to your backend API.
                        API Gateway validates the token on behalf of your API, so you don't have to add any code in your API to process the authentication.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;