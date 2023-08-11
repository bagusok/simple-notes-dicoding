import { useState} from "react"
import { Data } from "../helper/Data"

export default function NoteInput({title, setTitle, notes, setNotes, btn, setBtn, setSearch, data }) {
    const [char, setChar] = useState(49)

    const titleChangeListener = e => {
        setTitle(e.target.value.slice(0, 49))
        setChar(50 - e.target.value.length)
    }
    const notesChangeListener = e => setNotes(e.target.value)
    const buttonClickListener = () => {
        if (title.length > 5 && notes.length > 5) {
        Data(title, notes)
        setBtn(btn + 1)
        setSearch("")
        }else{
            alert('ISI DULU FORMNYA')
        }


    }

    return(
                <div className="card w-full bg-base-100 shadow-xl place-self-start p-6">
                    <div className="card-title mb-3">
                        <h4 className="font-bold">Notes</h4>
                    </div>
                    <div className="card-body p-0">
                        <form>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="tittle">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" onChange={titleChangeListener} value={title} />
                                <small>{title !== "" && `${char} Character Left`}</small>    
                            </div>
                            
                            <label htmlFor="note">
                                <span className="label-text">Notes</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Bio" onChange={notesChangeListener} value={notes}></textarea>
                        </form>
                        <div className="card-actions justify-left mt-2">
                        <button className="btn bg-blue-500 outline-none btn-sm pl-6 pr-6 normal-case rounded-md hover:bg-blue-300 hover:outline hover:outline-2 hover:outline-blue-500" onClick={buttonClickListener}>Save</button>
                        </div>
                    </div>
                </div>
    )
}