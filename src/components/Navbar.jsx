export default function Navbar({ search, setSearch }) {

    const searchOnChangeListeners = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="navbar bg-base-100 shadow-sm pr-4">
            <div className="flex-1">
            <h4 className="btn btn-ghost normal-case text-xl">Notes App</h4>
            </div>
            <div className="flex-2 gap-1">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-xs md:input-md input-bordered" onChange={searchOnChangeListeners} value={search}/>
                </div>
            </div>
        </div>
    )
}