import React from "react";

function Card({username ='HC',post = "Not assigned yet"}) {
    const description = 'Lorem IPsum, dolor sit amet consectetur adipisicing elit. Velit, eos.'
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.squarespace-cdn.com/content/v1/5ab926f8a9e0287fbf928015/1525455591813-UEEE7OV1EYJY40G1RC5C/OSA%2Bpeninsula.jpg?format=500w" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            {description}
                        </p>
                    </blockquote>
                    <figcaption className="">
                        <div>
                            {username}
                        </div>
                        <div>
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>

    )
}

export default Card