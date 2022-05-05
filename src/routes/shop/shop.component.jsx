import SOHP_DATA from '../../shop-data.json';

const Shop = () => {
    return (
        <div>
            {SOHP_DATA.map(({name, id}) => (
                <div key={id}>
                    <h1>{name}</h1>                    
                </div>
            ))}
        </div>
    )
}

export default Shop;