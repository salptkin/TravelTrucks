import Location from "../Location/Location"
import { useSelector } from "react-redux";
import useFetchAndDispatch from "../../hooks/useFetchAndDispatch";
import Buttons from "../ActionButtons/ActionButtons";

function CatalogSideContent() {
    const filterObj = useSelector((state) => state.filter);
    const fetchAndDispatch = useFetchAndDispatch();
  
    function handleSearch() {
        fetchAndDispatch(filterObj);
    }

    return (
        <aside className="flex flex-col gap-[40px]">
            <div>
                <Location />
            </div>

            <Buttons
          text="Search"
          cssClass="self-start bg-[#E44848] text-[#FFFF]"
          onClick={handleSearch}
        />
        </aside>
        
    );
}
export default CatalogSideContent;