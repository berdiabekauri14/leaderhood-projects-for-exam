import { useState } from "react"
import { getLocal, setLocal } from "../utils/localStorage"
import amyrobson from "../images/avatars/image-amyrobson.png"
import maxblagun from "../images/avatars/image-maxblagun.png"
import ramsesmiron from "../images/avatars/image-ramsesmiron.png"
import juliosomo from "../images/avatars/image-juliusomo.png"

export default function Comment() {
    const {count1, setCount1} = useState(12)
    const {count2, setCount2} = useState(5)
    const {count3, setCount3} = useState(4)
    const {count4, setCount4} = useState(2)
    
    const [comments, setComments] = useState(null)

    const storage = e => {
        const comment = e.target.form.comment.value;

        if (!comment) {
            alert("Please enter a comment")
        }

        setLocal("Comments", [...comments, setComments(comments)])
        getLocal("Comments")
    }

    storage()

    const deleteComment = e => {
        const userName = e.target.username.value
        const comment = e.target.comment.value

        if (userName === juliosomo) {
            alert("Comment has been deleted")
            comment.value = ""
        }
    }

    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const decrement1 = () => {
        setCount1(count1 - 1)
    }

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    const decrement2 = () => {
        setCount2(count2 - 1)
    }

    const increment3 = () => {
        setCount3(count3 + 1)
    }

    const decrement3 = () => {
        setCount3(count3 - 1)
    }

    const increment4 = () => {
        setCount4(count4 + 1)
    }

    const decrement4 = () => {
        setCount4(count4 - 1)
    }

    return (
        <div>
            <div id="comments">
                <div className=" w-2.5 h-2" id="first">
                    <div className=" w-0.5 h-0.5 bg-purple-500 text-purple-700" id="likes">
                        <p className=" cursor-pointer" onClick={increment1}>+</p>
                        <br />
                        <p>{count1}</p>
                        <br />
                        <p className=" cursor-pointer" onClick={decrement1}>-</p>
                    </div>
                    <br />
                    <div id="profile">
                        <img src={amyrobson} alt="amyrobson" />
                        <p className="userName"><b>amyrobson</b></p>
                        <br />
                        <p className=" text-purple-600 cursor-pointer">Reply</p>
                    </div>
                    <br />
                    <div id="comment">
                        <p>Impressive! Though it seems the drag feature could be improved. But overral it looks incredible. You've nailed the desing and the responsiveness at various breakpoints works really well.</p>
                    </div>
                    <br />
                    <div id="second">
                        <div className=" w-0.5 h-0.5 bg-purple-500 text-purple-700" id="likes">
                            <p className=" cursor-pointer" onClick={increment2}>+</p>
                            <br />
                            <p>{count2}</p>
                            <br />
                            <p className=" cursor-pointer" onClick={decrement2}>-</p>
                        </div>
                        <br />
                        <div id="profile">
                            <img src={maxblagun} alt="maxblagun" />
                            <p className="userName"><b>maxblagun</b></p>
                            <br />
                            <p className=" text-purple-600 cursor-pointer">Reply</p>
                        </div>
                        <br />
                        <div id="comment">
                            <p>Woah, your project looks awesome! How long have you been coding for? im still new. but think i want to dive into React as well soon. perhaps you can give me an insight on where can i learn react? thanks!</p>
                        </div>
                    </div>
                    <br />
                    <div id="third">
                        <div className=" w-0.5 h-0.5 bg-purple-500 text-purple-700" id="likes">
                            <p className=" cursor-pointer" onClick={increment3}>+</p>
                            <br />
                            <p>{count3}</p>
                            <br />
                            <p className=" cursor-pointer" onClick={decrement3}>-</p>
                        </div>
                        <br />
                        <div id="profile">
                            <img src={ramsesmiron} alt="ramsesmiron" />
                            <p className="userName"><b>ramsesmiron</b></p>
                            <br />
                            <p className=" text-purple-600 cursor-pointer">Reply</p>
                        </div>
                        <br />
                        <div id="comment">
                            <p><b className=" text-purple-700">@maxblagun</b> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.</p>
                        </div>
                    </div>
                    <br />
                    <div id="fourth">
                        <div className=" w-0.5 h-0.5 bg-purple-500 text-purple-700" id="likes">
                            <p className=" cursor-pointer" onClick={increment4}>+</p>
                            <br />
                            <p>{count4}</p>
                            <br />
                            <p className=" cursor-pointer" onClick={decrement4}>-</p>
                        </div>
                        <br />
                        <div id="profile">
                            <img src={juliosomo} alt="juliosomo" />
                            <p className="userName"><b>juliosomo <span className=" bg-purple-900 text-white">you</span></b></p>
                            <br />
                            <p className=" text-red-700 cursor-pointer" onClick={deleteComment}>Delete</p>
                            <br />
                            <p className=" text-purple-600 cursor-pointer"><Edi></Edi></p>
                        </div>
                        <br />
                        <div id="comment">
                            <p><b className=" text-purple-700">@ramsesmiron</b> I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="addComment">
                <div id="profile">
                    <img src={juliosomo} alt="juliosomo" />
                </div>
                <br />
                <form name="form">
                   <textarea name="comment" className=" m-2 p-2" placeholder="Add a comment"></textarea>
                   <br />
                   <button className=" border-2 bg-purple-900 text-white">SEND</button>
                </form>
            </div>
        </div>
    );
}