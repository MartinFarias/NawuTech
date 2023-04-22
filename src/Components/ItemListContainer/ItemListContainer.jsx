
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import a3200g from "../../Assets/fotos-ecomerce/3.3200g/1.jpg"
import a34100 from "../../Assets/fotos-ecomerce/3.4100/1.jpg"
import a53600 from "../../Assets/fotos-ecomerce/5.3600/1.jpg"
import a55600 from "../../Assets/fotos-ecomerce/5.5600/1.jpg"
import a55600g from "../../Assets/fotos-ecomerce/5.5600G/1.jpg"
import a57600 from "../../Assets/fotos-ecomerce/5.7600/1.jpg"
import a57600x from "../../Assets/fotos-ecomerce/5.7600X/1.jpg"
import a5pro4650g from "../../Assets/fotos-ecomerce/5PRO4650G/1.jpg"
import a75700g from "../../Assets/fotos-ecomerce/7.5700G/1.jpg"
import a77700 from "../../Assets/fotos-ecomerce/7.7700/1.jpg"
import a7pro4750g from "../../Assets/fotos-ecomerce/7PRO4750G/1.jpg"
import a95900x from "../../Assets/fotos-ecomerce/9.5900X/1.jpg"
import a95950x from "../../Assets/fotos-ecomerce/9.5950X/1.jpg"
import a97900x from "../../Assets/fotos-ecomerce/9.7900X/1.jpg"

const Procesadores = [{id:1, nombre:"Procesador AMD Ryzen 3 4100 Sin cooler OEM", precio: "$30900", imagen: a34100, caracteristicas:"Modelo: 4100, Socket: AM4 Ryzen 4th Gen, Núcleos: 4, Frecuencia: 3800.00 mhz, Proceso De Fabricación: 7 nm, Chipset: Gpu NO Posee Gráficos Integrados, Hilos: 8, Frecuencia Turbo: 4000 mhz, Familia: AMD RYZEN 3",categoria:"ofertas"},
     
{id:2, nombre:"Procesador AMD RYZEN 3 3200G",
precio: "$50600",imagen: a3200g, caracteristicas:"Modelo: Ryzen 3 3200G, Socket: AM4 APU 2th Gen, Núcleos: 4, Frecuencia: 3600.00 mhz, Proceso De Fabricación: 12 nm, Chipset Gpu: Radeon Vega 8, Hilos: 4, Frecuencia Turbo: 4000 mhz, Familia: AMD RYZEN 3",categoria:"ofertas"},

{id:3, nombre:"Procesador AMD RYZEN 5 3600 ",precio: "$51999", imagen: a53600, caracteristicas: "Modelo: Ryzen 5 3600, Socket: AM4 Ryzen 3th Gen, Núcleos: 6, Frecuencia: 3600.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: NO Posee Gráficos Integrados, Hilos: 12, Frecuencia Turbo: 4200 mhz, Familia: AMD RYZEN 5",categoria:"ofertas"},

{id:4,nombre:"Procesador AMD Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler",precio:"$84599",imagen: a55600, caracteristicas:"Modelo: 5600G, Socket: AM4 APU 5000, Núcleos: 6, Frecuencia: 3900.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: Radeon Vega 7, Hilos: 12, Frecuencia Turbo: 4400 mhz, Familia: AMD RYZEN 5",
categoria:"catalogo"},

{id:5, nombre: "Procesador AMD Ryzen 5 5600 4.4GHz Turbo + Wraith Stealth Cooler", precio: "$85250", imagen: a55600g, caracteristicas
:"Modelo: 5600, Socket: AM4 Ryzen 4th Gen, Núcleos: 6, Frecuencia: 3500.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: NO Posee Gráficos Integrados, Hilos: 12, Frecuencia Turbo: 4000 mhz, Familia: AMD RYZEN 5 ",
categoria:"catalogo"},

{id:6, nombre: "Procesador AMD Ryzen 5 7600 5.1GHz Turbo AM5 + Wraith Stealth Cooler",
precio: "$110600",
imagen: a57600,
caracteristicas:"Modelo: Ryzen 5 7600, Socket: AM5 Ryzen 7000, Núcleos: 6, Frecuencia: 3800.00 mhz, Proceso De Fabricación: 5 nm, Chipset Gpu: AMD Radeon Graphics, Hilos: 12, Frecuencia Turbo: 5100 mhz, Familia: AMD RYZEN 5 ",
categoria: "catalogo"},

{id:7, nombre: "Procesador AMD Ryzen 5 7600X 5.3GHz Turbo AM5 - No incluye Cooler - CVIDEO", precio:"$117950",
imagen: a57600x,
caracteristicas:"Modelo: Ryzen 5 7600X, Socket: AM5 Ryzen 7000, Núcleos: 6, Frecuencia: 4700.00 mhz, Proceso De Fabricación: 5 nm, Chipset Gpu: AMD Radeon Graphics, Hilos: 12, Frecuencia Turbo: 5300 mhz, Familia: AMD RYZEN 5 ",
categoria:"catalogo"},

{id:8, nombre: "Procesador AMD Ryzen 5 PRO 4650G 4.2GHz Turbo + Wraith Stealth Cooler OEM", precio:"$70599", imagen: a5pro4650g, caracteristicas:"Modelo: Ryzen 5 PRO 4650G, Socket: AM4 APU 3th Gen, Núcleos: 6, Frecuencia: 3700.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: Radeon Vega 7, Hilos: 12, Frecuencia Turbo: 4200 mhz, Familia: AMD RYZEN 5",
categoria:"catalogo"},

{id:9, nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler", precio:"$109200", imagen: a75700g, caracteristicas:"Modelo: 5700G, Socket: AM4 APU 5000, Núcleos: 8, Frecuencia: 3800.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: Radeon Vega 8, Hilos: 16, Frecuencia Turbo: 4600 mhz, Familia: AMD RYZEN 7",
categoria:"catalogo"},

{id:10, nombre: "Procesador AMD Ryzen 7 7700 5.3GHz Turbo AM5",
precio:"$160400", imagen: a77700, caracteristicas:"Modelo: Ryzen 7 7700, Socket: AM5 Ryzen 7000, Núcleos: 8, Frecuencia: 3800.00 mhz, Proceso De Fabricación: 5 nm, Chipset Gpu: AMD Radeon Graphics, Hilos: 16, Frecuencia Turbo: 5300 mhz, Familia: AMD RYZEN 7", categoria:"catalogo"},

{id:11, nombre: "Procesador AMD Ryzen 7 PRO 4750G + Wraith Stealth Cooler OEM", precio:"$101550", imagen: a7pro4750g, caracteristicas:"Modelo: PRO 4750G, Socket: AM4 APU 3th Gen, Núcleos: 8, Frecuencia: 3600.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: Radeon Vega 7, Hilos: 16, Frecuencia Turbo: 4400 mhz, Familia: AMD RYZEN 7" ,
categoria:"catalogo"},

{id:12, nombre: "Procesador AMD Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler", precio:"$221250", imagen: a95900x, caracteristicas:"Modelo: 5900X, Socket: AM4 Ryzen 4th Gen, Núcleos: 12, Frecuencia: 3700.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: NO Posee Gráficos Integrados, Hilos: 24, Frecuencia Turbo: 4800 mhz, Familia: AMD RYZEN 9",
categoria:"catalogo"},

{id:13, nombre: "Procesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4 - No incluye Cooler", precio:"$247150", imagen: a95950x, caracteristicas:"Modelo: 5950X, Socket: AM4 Ryzen 4th Gen, Núcleos: 16, Frecuencia: 3400.00 mhz, Proceso De Fabricación: 7 nm, Chipset Gpu: NO Posee Gráficos Integrados, Hilos: 32, Frecuencia Turbo: 4900 mhz, Familia: AMD RYZEN 9 ",
categoria:"ofertas"},

{id:14, nombre: "Procesador AMD Ryzen 9 7900X 5.6GHz Turbo AM5 - No incluye Cooler - CVideo", precio:"$221900", imagen: a97900x, caracteristicas:"Modelo: Ryzen 9 7900X, Socket: AM5 Ryzen 7000, Núcleos: 12, Frecuencia: 4700.00 mhz, Proceso De Fabricación: 5 nm, Chipset Gpu: AMD Radeon Graphics, Hilos: 24, Frecuencia Turbo: 5600 mhz, Familia: AMD RYZEN 9 ",
categoria:"catalogo"},];

export const ItemListContainer = () => {
  const [data,setData] = useState([]);

  const {categoriaId} = useParams(); 

  useEffect (() => {
const getData = new Promise(resolve => {
  setTimeout (() => {
    resolve(Procesadores);
    }, 1000);
  }); 
  if (categoriaId) {
  getData.then(res => setData(res.filter(Procesador => Procesador.categoria === categoriaId)));
  } else {
    getData.then(res => setData(res));
  }

}, [categoriaId])




return (
  <>
      
      <ItemList data={data} />
   
  </>
);
}

export default ItemListContainer;