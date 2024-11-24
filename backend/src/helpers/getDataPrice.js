
//. ----------- DECLARACIÓN DE FUNCIONES ----------- 

/**
 * @author Ana
 * @description: Función que realiza una solicitud HTTP GET para obtener datos de precios, porcentages y hora
 * @param {String} url 
 * @returns {Array}
 */
export const getDataPrices = async (url) => {
    try {

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Error al obtener la data");
      }
  
      const getData = await response.json();
     
      const { included: [{ attributes: {values} }]} = getData;

      return values;
  
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  

//  value: El precio en euros/MWh
// datetime: La fecha y hora correspondientes al valor