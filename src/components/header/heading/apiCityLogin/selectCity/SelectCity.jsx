

const SelectCity = ({getSelectCityValue, theme}) => {

    return ( 
        <div>
            <label htmlFor="SelectCity">SelectCity</label>
            <select  style={{colorScheme: `${theme}`}} onChange={getSelectCityValue} name="SelectCity" id="SelectCity">
                <option value="">--Please choose city--</option>
                <option value="Sochi">Sochi</option>
                <option value="Tver">Tver</option>
                <option value="Paris">Paris</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Sydney">Sydney</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Wellington">Wellington</option>
            </select>
        </div>
     );
}
 
export default SelectCity;