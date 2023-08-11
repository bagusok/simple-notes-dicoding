import Highlighter from "react-highlight-words"

export default function List({ title, body, data, onDelete, onArchive, searchHint}) {
    return (
        <div className="card bg-white border-2 border-slate-400 text-black p-1 rounded-md h-48">
            <div className="card-body p-1 m-0">
                <h5 className="card-title text-md truncate">
                    <Highlighter searchWords={[searchHint]} textToHighlight={title} />
                </h5>
                <p className="text-justify">{body.length < 80 ? body : `${title.substring(0, 80)}...`}</p>
            </div>
            <div className="card-actions justify-center">
            <button className="btn btn-danger btn-xs normal-case rounded-sm" onClick={(e) => onDelete(data[0])}>Delete</button>
            <button className="btn btn-secondary btn-xs normal-case rounded-sm" onClick={(e) => onArchive([data[0], data[1]])}>{data[1].archived ? "Unarchive" : "Archive"}</button>
            </div>
        </div>
    )
}