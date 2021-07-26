import Geocode from "react-geocode";

export const firsLetterToUpperCase= (str:string):string =>{
    return str[0].toUpperCase() + str.slice(1);
}
export const geolocation = ({country ,city, addressLine}) => {
    Geocode.setApiKey(process.env.REACT_APP_GEOCODING_KEY);
    Geocode.setLocationType("ROOFTOP")
    return Geocode.fromAddress(`${country}, ${city}, ${addressLine}`)
}