import CollectionList from "../components/CollectionList";
import Filters from "../components/Filters";
import Sort from "../components/Sort";

function Collection() {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <Filters />
      <div className="flex flex-col w-full gap-3">
        <Sort />
        <CollectionList />
      </div>
    </div>
  );
}

export default Collection;
