import {   useEffect, useState } from 'react';
// import useRefMounted from 'src/hooks/useRefMounted';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
// import Autocomplete from '@mui/material/Autocomplete';
// import {SerialPort} from 'serialport';
import 'react-quill/dist/quill.snow.css';
import ApexCharts from 'react-apexcharts'
import certifyAxios from 'src/utils/aimAxios';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import {
  useNavigate
} from 'react-router-dom';
// import { DateTimePicker } from '@mui/lab';
// import dayjs from 'dayjs';
import {
  Grid,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // Zoom,
  Typography,
  // TextField,
  // FormHelperText,
  // CircularProgress,
  Button,
  // FormControl,
  // Select,
  // MenuItem,
  // Card,
  // Divider,
  // Alert,
  // useTheme
} from '@mui/material';
// import { useSnackbar } from 'notistack';
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
// import InputLabel from '@mui/material/InputLabel';
// import debounce from 'lodash/debounce';
// import DropzoneAIM from 'src/components/DropzoneAIM';



function PageHeader() {

  // const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  // const theme = useTheme();
  // const ws = new WebSocket("ws://localhost:5000");
  const [cliente,setCliente] = useState('');
  const [nombres, setNombres] = useState('');
  const [apePaterno, setApePaterno] = useState('');
  const [apeMaterno, setApeMaterno] = useState('');
  const [nroDoc, setNroDoc] = useState('');
  // const [correo, setCorreo] = useState('');
  // const [celular, setCelular] = useState('');
  // const [direccion, setDireccion] = useState('');
  // const [tarjeta,setTarjeta] = useState('');
  // const [sala, setSala] = useState(1);
  // const [usuario,setUsuario] = useState('');
  // const [contrasenha,setContrsenha] = useState('');
  // const [contrasenha2, setContrsenha2] = useState('');
  // const [start, setStart] = useState(new Date()); // Fecha de nacimiento
  // const [sexo, setSexo] = useState(1);
  // const [tipoDoc, setTipoDoc] = useState(1);
  // const [cargo, setCargo] = useState(2);

  // const [open, setOpen] = useState(false);
//   const sexTypeOptions = [
//     {
//        id:1,
//        name: 'Masculino'
//     },
//     {
//       id:2,
//       name:'Femenino'
//     }
//   ]
//  const docTypeOptions = [
//   {
//     id:1,
//     name:'DNI'
//   },
//   {
//     id:2,
//     name:'Pasaporte'
//   },
//   {
//     id:3,
//     name:'Carnet de Extranjeria'
//   }
//  ]
  
//  const cargoTypeOptions = [
//   {
//     id:2,
//     name:'Basico'
//   },
//   {
//     id:3,
//     name:'VIP'
//   } 
  // {
  //   id:4,
  //   name:'Gerente de Marketing'
  // }
 // ]

  // const handleCreateProjectSuccess = () => {
  //   enqueueSnackbar('Se ha modificado al cliente exitosamente', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     TransitionComponent: Zoom
  //   });

  //   cliente.nombres = nombres;
  //   cliente.apellido_p = apePaterno;
  //   cliente.apellido_m = apeMaterno;
  //   cliente.correo = correo;
  //   cliente.direccion = direccion;
  //   cliente.fecha_nac = start;
  //   cliente.id_cargo = cargo;
  //   cliente.id_sexo = sexo; 
  //   cliente.telefono = celular;
  //   cliente.id_documento = tipoDoc;
  //   cliente.nro_documento = nroDoc;
  //   localStorage.setItem("cliente",JSON.stringify(cliente));
  //   navigate('/sapt/manager/client');
  // };

  // const handleCreateProjectFailure = (message) => {
  //   enqueueSnackbar(`Hubo un error en el registro. ${message}`, {
  //     variant: 'error',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     TransitionComponent: Zoom
  //   });
  // };


  const regresarBase = () =>{
     navigate('/sapt/manager/statistics/client');
  }


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  
  // const enviarRequest = async () => {
  //   try {

  //     const request = {
  //       "id_cliente": cliente.id_cliente,
  //       "id_sexo": sexo,
  //       "id_documento": tipoDoc,
  //       // "id_cargo": cargo,
  //       // "id_sala": 1,
  //       // "usuario":usuario,
  //       // "contrasenha":contrasenha,
  //       "nombres":nombres,
  //       "apellido_p":apePaterno,
  //       "apellido_m":apeMaterno,
  //       "fecha_nac":start,
  //       "nro_documento":nroDoc,
  //       "telefono":celular,
  //       "correo":correo,
  //       "direccion":direccion,
  //       //  
  //     };
      
  //     const response = await certifyAxios.post('/person/client/update', request);
  //     console.log(response);
  //     handleClose();
  //     handleCreateProjectSuccess();
      
  //   } catch (err) {
  //     handleClose();
  //     handleCreateProjectFailure(err.message);
  //     console.error(err);

  //     if (err.response) {
  //       console.log(err.response);
  //     } else if (err.request) {
  //       console.error(err.request);
  //     } else {
  //       console.error('Some other unknown error');
  //     }
  //   }
  // }
  const [sorteo,setSorteo] = useState(0);
  const [credito,setCredito] = useState(0);
  const [series,setSeries] =  useState([44, 55, 13, 43, 22]);
  const [options,setOptions] =  useState({
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    chart: {
      width: 1000,
      type: 'pie',
      onItemClick: {
        toggleDataSeries: false
        },
        onItemHover: {
            highlightDataSeries: false
        },
    },
    tooltip:{
    enabled:true
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend:{
    position:'left',
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
        highlightDataSeries: false
    },
    },
    states: {
      active: {
        filter: {
          type: 'none' /* none, lighten, darken */
        }
      },
      hover: {
        filter: {
            type: 'none',
        }
      },
    },
    responsive: [{
      breakpoint: 1000,
      options: {
        chart: {
          width: 1000,
          onItemClick: {
            toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        legend: {
          show:true,
            position: 'right'
        }
      }
    }]
  });
  const [series2,setSeries2] =  useState([44, 55, 13, 43, 22]);
  const [options2,setOptions2] =  useState({
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    chart: {
      width: 1000,
      type: 'pie',
      onItemClick: {
        toggleDataSeries: false
        },
        onItemHover: {
            highlightDataSeries: false
        },
    },
    tooltip:{
    enabled:true
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend:{
    position:'left',
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
        highlightDataSeries: false
    },
    },
    states: {
      active: {
        filter: {
          type: 'none' /* none, lighten, darken */
        }
      },
      hover: {
        filter: {
            type: 'none',
        }
      },
    },
    responsive: [{
      breakpoint: 1000,
      options: {
        chart: {
          width: 1000,
          onItemClick: {
            toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        legend: {
          show:true,
            position: 'right'
        }
      }
    }]
  });
  const [series3,setSeries3] = useState([{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }]);
  const [series4,setSeries4] = useState([{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }]);
  const [options3,setOptions3] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  });
  const [options4,setOptions4] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  });
   const llenartiempos =(tiempos)=>{
    let x = [];
    let y = [];
    let num;
    let suma = 0;
    tiempos.forEach(element => {
      num = Math.round((parseFloat(element.tiempo)/3600 + Number.EPSILON) * 100) / 100;
      suma+=num;
      x.push(
        // Math.trunc(parseFloat(element.tiempo)/3600)
       num
      );
      
      y.push(element.nombre + ": " + num.toString() + " H"); // eslint-disable-line prefer-template
    });
    console.log(x);
    setSeries(x);
    // setSeries(x);
    setOptions({
      title:{
       text:"TOTAL HORAS JUGADAS\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" // eslint-disable-line prefer-template
       + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + suma.toString() +" HORAS" // eslint-disable-line prefer-template
       ,style: {
        fontSize:  '20px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      }
      }
      ,
      plotOptions: {
        pie: {
          expandOnClick: false,
      },
    },
      chart: {
        width: 400,
        type: 'pie',
        onItemClick: {
          toggleDataSeries: false
          },
          onItemHover: {
              highlightDataSeries: false
          },
      },
      tooltip:{
        y: {
          formatter: () => {
            return ""
          },
          title: {
            formatter:  (seriesName) =>{
              return seriesName
            }
          }
      }
        },
        states: {
          active: {
            filter: {
              type: 'none' /* none, lighten, darken */
            }
          },
          hover: {
            filter: {
                type: 'none',
            }
          },
        },
      labels: y,
      subtitle:{
        text:"TOP 3 POR MODELO",
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
      },
      legend:{
        position:'left',
        onItemClick: {
          toggleDataSeries: false
        },
        onItemHover: {
            highlightDataSeries: false
        },
        fontSize: '16px',
        offsetY: 60,
        itemMargin: {
          horizontal: 0,
          vertical: 7
          }
        },
      responsive: [{
        breakpoint: 1000,
        options: {
          chart: {
            width: 1000,
            onItemClick: {
              toggleDataSeries: false
              },
              onItemHover: {
                  highlightDataSeries: false
              },
          },
          legend: {
            show:true,
            position: 'right'
          }
        }
      }]
    });
   }
   
   const llenarcreditos =(creditos)=>{
    let x = [];
    let y = [];
    let num;
    let suma = 0;
    creditos.forEach(element => {
      num = Math.round((parseFloat(element.puntos) + Number.EPSILON) * 100) / 100;
      suma+=num;
      x.push(
        // Math.trunc(parseFloat(element.tiempo)/3600)
       num
      );
      
      y.push(element.nombre + ": " + num.toString()+""); // eslint-disable-line prefer-template
    });
    console.log(x);
    setSeries2(x);
    // setSeries(x);
    setOptions2({
      title:{
       text:"TOTAL CREDITOS JUGADOS\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" // eslint-disable-line prefer-template
       + "\xa0" + suma.toString()+" CREDITOS" // eslint-disable-line prefer-template
       ,style: {
        fontSize:  '20px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      }
      }
      ,
      plotOptions: {
        pie: {
          expandOnClick: false,
      },
    },
      chart: {
        width: 400,
        type: 'pie',
        onItemClick: {
          toggleDataSeries: false
          },
          onItemHover: {
              highlightDataSeries: false
          },
      },
      tooltip:{
        y: {
          formatter: () => {
            return ""
          },
          title: {
            formatter:  (seriesName) =>{
              return seriesName
            }
          }
      }
        },
        states: {
          active: {
            filter: {
              type: 'none' /* none, lighten, darken */
            }
          },
          hover: {
            filter: {
                type: 'none',
            }
          },
        },
      labels: y,
      subtitle:{
        text:"TOP 3 POR MODELO",
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
      },
      legend:{
        position:'left',
        onItemClick: {
          toggleDataSeries: false
        },
        onItemHover: {
            highlightDataSeries: false
        },
        fontSize: '16px',
        offsetY: 60,
        itemMargin: {
          horizontal: 0,
          vertical: 7
          }
        },
      responsive: [{
        breakpoint: 1000,
        options: {
          chart: {
            width: 1000,
            onItemClick: {
              toggleDataSeries: false
              },
              onItemHover: {
                  highlightDataSeries: false
              },
          },
          legend: {
            show:true,
            position: 'right'
          }
        }
      }]
    });
   }

   const llenarpagos =(pagos)=>{
    let x = [];
    let y = [];
    let num;
    let suma = 0;
    pagos.forEach(element => {
      num = element.pagos
      suma+=num;
      x.push(
        num
      );
      
      y.push(element.nombre); // eslint-disable-line prefer-template
    });
    console.log(x);
    setSeries3([{
      data: x
    }]);
    setOptions3({
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: y,
      },
      yaxis:{
      
      },
      tooltip:{
          enabled:true,
      },
      title: {
        text: "TOTAL PAGOS MANUALES \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " +suma.toString()+" PAGOS",  // eslint-disable-line prefer-template
        align: 'left',
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
        
    },
    subtitle: {
        text: 'TOP 3 POR MODELO',
        align: 'left',
        offsetY:30,
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
    },
    });
   }
   const llenarpedidos =(pedidos)=>{
    let x = [];
    let y = [];
    let num;
    let suma = 0;
    pedidos.forEach(element => {
      num = element.pedidos
      suma+=num;
      x.push(
        num
      );
      
      y.push(element.nombre); // eslint-disable-line prefer-template
    });
    console.log(x);
    setSeries4([{
      data: x
    }]);
    setOptions4({
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: y,
      },
      yaxis:{
      
      },
      tooltip:{
          enabled:true,
      },
      title: {
        text: "TOTAL PEDIDOS DE BAR \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " +suma.toString()+" PEDIDOS",  // eslint-disable-line prefer-template
        align: 'left',
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
        
    },
    subtitle: {
        text: 'TOP 3 POR MODELO',
        align: 'left',
        offsetY:30,
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
    },
    });
   }

  useEffect(async ()=>{
    // LLamar a lo colocado en el localstorage
    let clienteX = JSON.parse(localStorage.getItem("estadistica"));
    if(clienteX==null) navigate('/sapt/manager/client');
    setCliente(clienteX);
    console.log(cliente);
    setNombres(clienteX.nombres);
    console.log(nombres);
    setApePaterno(clienteX.apellido_p);
    console.log(apePaterno);
    setApeMaterno(clienteX.apellido_m);
    console.log(apeMaterno);
    setNroDoc(clienteX.nro_documento); 
    console.log(nroDoc);
    // //////////Tiempos////////////
    let request = {"id_tarjeta":clienteX.id_tarjeta};
    let x = await certifyAxios.post('/estadistica/query/statistic/time', request);
    let tiempos = x.data.result.sort((a,b) => parseFloat(b.tiempo) - parseFloat(a.tiempo));
    let tam = 0;
    for(let i =3;i<tiempos.length;i++){
        tam+=parseFloat(tiempos[i].tiempo);
    }
    tiempos.length = 3;
    tiempos.push({nombre:"OTROS",tiempo:tam});
    console.log(tiempos);
    llenartiempos(tiempos);
    // /////////////////////////////////
    // //////////Creditos////////////
    request = {"id_tarjeta":clienteX.id_tarjeta};
    x = await certifyAxios.post('/estadistica/query/statistic/point', request);
    let creditos = x.data.result.sort((a,b) => parseFloat(b.puntos)-parseFloat(a.puntos));
    tam = 0;
    for(let i =3;i<creditos.length;i++){
        tam+=parseFloat(creditos[i].puntos);
    }
    creditos.length = 3;
    creditos.push({nombre:"OTROS",puntos:tam});
    console.log(creditos);
    llenarcreditos(creditos);
    // /////////////////////////////////
    // //////////Pagos////////////
    request = {"id_cliente":clienteX.id_cliente};
    x = await certifyAxios.post('/estadistica/query/statistic/pay', request);
    let pagos = x.data.result.sort((a,b) => parseInt(b.pagos)-parseInt(a.pagos));
    tam = 0;
    for(let i =3;i<pagos.length;i++){
        tam+=parseInt(pagos[i].pagos);
    }
    pagos.length = 3;
    pagos.push({nombre:"OTROS",pagos:tam});
    console.log(pagos);
    llenarpagos(pagos);
    // /////////////////////////////////
    // //////////Pedidos////////////
    request = {"id_cliente":clienteX.id_cliente};
    x = await certifyAxios.post('/estadistica/query/statistic/order', request);
    let pedidos = x.data.result.sort((a,b) => parseInt(b.pedidos)-parseInt(a.pedidos));
    tam = 0;
    for(let i =3;i<pedidos.length;i++){
        tam+=parseInt(pedidos[i].pedidos);
    }
    pedidos.length = 3;
    pedidos.push({nombre:"OTROS",pedidos:tam});
    console.log(pedidos);
    llenarpedidos(pedidos);
    // /////////////////////////////////
    request = {"id_tarjeta":clienteX.id_tarjeta};
    x = await certifyAxios.post('/estadistica/query/statistic/ticket', request);
    let a = 0;
    let b = 0;
    for(let i = 0;i<x.data.result.length;i++){
      if(x.data.result[i].tipo===1) a+=parseInt(x.data.result[i].cantidad_cupones);
       else b+=parseInt(x.data.result[i].cantidad_cupones);
    }
    setSorteo(a);
    setCredito(b);
    // setSeries3(series3);
    // setSeries4(series4);
    // setOptions3(options3);
    // setOptions4(options4);
  },[]);

  return (
    <>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" sx={{mb:2}}>    
          <Typography variant="h2" component="h3">
            Estadísticas del cliente
          </Typography>   
      </Grid>
       {/* <br/> */}
          {/* <Grid sx={{ display: 'flex', flexDirection: 'row', mb: 7 ,backgroundColor: "transparent",
        boxShadow: "none"}}> */}
            {/* <Grid xs={4}/> */}
            <Grid container spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              >
                <Grid item>
                  <Typography sx={{fontSize: '1.3rem',fontWeight:'bold'}}>
                     {`Nombres: `}
                    </Typography>   
                </Grid>
                <Grid item>
                  <Typography sx={{fontSize: '1.25rem'}}>
                     {`\xa0${nombres}`}
                    </Typography>   
                </Grid>
                <Grid item style={{marginLeft:'4%'}}>
                  <Typography sx={{fontSize: '1.3rem',fontWeight:'bold'}}>
                     {`Ap. Paterno: `}
                    </Typography>   
                </Grid>
                <Grid item>
                  <Typography sx={{fontSize: '1.25rem'}}>
                     {`\xa0${apePaterno}`}
                    </Typography>   
                </Grid>
                <Grid item style={{marginLeft:'4%'}}>
                  <Typography sx={{fontSize: '1.3rem',fontWeight:'bold'}}>
                     {`Ap. Materno: `}
                    </Typography>   
                </Grid>
                <Grid item>
                  <Typography sx={{fontSize: '1.25rem'}}>
                     {`\xa0${apeMaterno}`}
                    </Typography>   
                </Grid>
                <Grid item style={{marginLeft:'4%'}}>
                  <Typography sx={{fontSize: '1.3rem',fontWeight:'bold'}}>
                     {`Nro. Documento: `}
                    </Typography>   
                </Grid>
                <Grid item>
                  <Typography sx={{fontSize: '1.25rem'}}>
                     {`\xa0${nroDoc}`}
                    </Typography>   
                </Grid>
        </Grid>
            <br/>
         <Grid container spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              >
            <Grid item style={{ border: "2px solid black" ,width:'580px',height:'380px'}}>
            <ApexCharts options={options} series={series} type="pie" width={580} />
            </Grid>
            <Grid item style={{ border: "2px solid black",marginLeft:'3%',width:'580px',height:'380px'}}>
            <ApexCharts options={options2} series={series2} type="pie" width={580} />
            </Grid>
          </Grid>
          
          {/* <ApexCharts options={options2} series={series2} type="bar" height={300} width={380}/> */}
            {/* <Divider orientation="vertical" flexItem /> */}
            <br/>
            <Grid container spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              >
            <Grid item style={{ border: "2px solid black" ,width:'450px',height:'360px'}}>
            <ApexCharts options={options3} series={series3} type="bar" height={340} width={450}/>
            </Grid>
            <Grid item style={{ border: "2px solid black",marginLeft:'2%',width:'450px',height:'360px'}}>
            <ApexCharts options={options4} series={series4} type="bar" height={340} width={450}/>
            </Grid>
            <Grid item spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{marginLeft:'1%'}}
              >
            <Grid item style={{ border: "2px solid black" ,marginLeft:'3%',marginBottom:'20%',width:'220px',height:'120px'}}>
              <Typography sx={{fontSize: '1rem',fontWeight:'bold',textAlign:'center'}}>
                TOTAL TICKETS DE SORTEO
              </Typography>
              <Typography sx={{fontSize: '1rem',fontWeight:'bold',textAlign:'center'}}>
                {sorteo}
              </Typography>
            </Grid>
            <Grid item style={{ border: "2px solid black",marginLeft:'3%',width:'220px',height:'120px'}}>
             <Typography sx={{fontSize: '1rem',fontWeight:'bold',textAlign:'center'}}>
                TOTAL TICKETS DE CRÉDITO
              </Typography> 
              <Typography sx={{fontSize: '1rem',fontWeight:'bold',textAlign:'center'}}>
                {credito}
              </Typography>
            </Grid>
            </Grid>
          </Grid>
    
          <br/>
          <Grid
            container
            direction="row"
            alignItems="left"
            justifyContent="left"
            style={{marginLeft:'2%'}}
          >
            
            <Button
            
              // color="secondary"
              variant="contained"
              size="large"
              
              onClick={regresarBase}
            >
              Regresar
            </Button>

            
            
          </Grid>
            
    </>
  );
}

export default PageHeader;
