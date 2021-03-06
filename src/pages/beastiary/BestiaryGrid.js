
import MonsterCard from "./MonsterCards";
import Loading from '../../components/ui/Loading'

const BestiaryGrid = ({ monsters, query, isLoading }) => { 
  return ( isLoading ? (<Loading />): (
    <div className="p-3">
      {/* <h3 className="text-muted pageTitle mb-4">BEASTIARY</h3> */}
      <section>
        
        {monsters.filter((a) => (a.name.toLowerCase().indexOf(query.toLowerCase()) >=0))
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((monster) => (
            <MonsterCard key={monster._id} monster={monster}></MonsterCard>
          ))}
      </section>
    </div>)
  );
};

export default BestiaryGrid;
