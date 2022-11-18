import React from 'react';

const Blogs = () => {
    return (
        <div className='gap-10 ml-9 md:mx-16 py-16 grid md:grid-cols-3'>

            <div class="card w-72 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How Improve React Application Performance</h2>
                    <p>
                        Use React.Fragments to Avoid Additional HTML Element Wrappers <br />
                        Avoid Inline Function Definition in the Render Function <br />
                        Throttling and Debouncing Event Action in JavaScript <br />
                        Avoid using Index as Key for map <br />
                        Avoiding Props in Initial States
                    </p>

                </div>
            </div>

            <div class="card w-72 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Diffarent Ways to manage state in React application</h2>
                    <p>
                        Local state is data we manage in one or another component. <br />
                        Across multiple components Global state is data we manage . <br />
                        Data that comes from an external server that must be integrated with our UI state. <br />
                        Data that exists on our URLs, including the pathname and query parameters. <br />

                    </p>

                </div>
            </div>


            <div class="card w-72 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>

                        A prototype is an object that is used as a blueprint for creating other objects. When an object is created using a prototype, the new object inherits all of the properties and methods of the prototype. <br />
                        JavaScript prototypes are different from other inheritance methodologies in that they allow for objects to inherit directly from other objects. This means that you can create a chain of objects, with each object inheriting from the object before it.

                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;