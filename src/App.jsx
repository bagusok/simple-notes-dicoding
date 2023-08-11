import { useState, useEffect } from "react";
import { Data, DeleteData, ArchiveData } from "./helper/Data";
import Navbar from "./components/Navbar";
import NoteInput from "./components/NoteInput"
import NoteArchive from "./components/NoteArchive"
import NoteShow from "./components/NoteShow";

function App() {
  
  const [data, setData] = useState(Data())
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [btn, setBtn] = useState(0)
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    if (search !== "") {
      let s = search.toLowerCase()
      // var datas = Data().filter((a) => a.title === search)
      let datas = Data().filter((e) => {
       if (e.title.toLowerCase().indexOf(s) !== -1) {
        return true
       }
       return false
      })
      setData(datas) 
    }else{
      setData(Data())
    }
  }, [search, btn])

  const onDeleteHandler = (id) => {
    DeleteData(id)
    setBtn(Math.random(10))
}

const onArchiveHandler = (data) => {
    ArchiveData(data)
    setBtn(Math.random(10))
}


  return (
    <div className="min-h-screen box-border bg-base-200">
      <Navbar search={search} setSearch={setSearch} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 columns-2">
          <NoteInput title={title} setTitle={setTitle} notes={notes} setNotes={setNotes} btn={btn} setBtn={setBtn} setSearch={setSearch} data={data} />
          <div className="card bg-white p-4 notes-list w-full">
              {
                data[0] === undefined ? <h3 className="font-bold text-lg">Tidak ada Data</h3>
                : <>
                <div className="card-title mb-2">
                  <h4>List Notes</h4>
                </div>
                <NoteShow data={data} onDelete={onDeleteHandler} onArchive={onArchiveHandler} searchHint={search} />
                <h4 className="text-md font-bold mb-4 mt-6">Archive</h4>
                <NoteArchive data={data} onDelete={onDeleteHandler} onArchive={onArchiveHandler} searchHint={search} />
                </>
              }
              
            
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
