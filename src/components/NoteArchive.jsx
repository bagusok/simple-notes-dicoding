import List from "./List"

export default function NoteArchive({ onDelete, onArchive, data, searchHint}) {
    

    return(
        <div className="grid md:grid-cols-3 gap-3">
        {data.map((a, i) => {
            if(a.archived === true) {
                return(
                <List key={i} title={a.title} body={a.body} data={[i, a]} onDelete={onDelete} onArchive={onArchive} searchHint={searchHint} />
                )
            }
            return true
            
        })}
        </div>
    )
}