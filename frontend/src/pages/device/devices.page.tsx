import { useContext, useEffect, useState } from "react";
import getAxiosInstance from "../../axios.service";
import DeviceCard, { Device } from "../../components/cards/deviceCard";
import DeviceModal from "../../components/deviceModal/device.modal";
import { WebsocketContext } from "../../context/WebsocketContext";  
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import getAxiosRabbitInstance from "../../axios.rabbitservice";

const DevicePage = (): JSX.Element => {
    const user = JSON.parse(localStorage.getItem('user') || "");
    const [userDevices, setUserDevices] = useState<Device[]>([]);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState<Device>({id: "", description: "", address: "", maxHrEnergyConsumption: 0, userId: ""});

    async function deleteDevice(id: string) {
        return await getAxiosInstance().delete(`devices/${id}`);
    }

    useEffect( () => {
        if(user.isAdmin){
            getAxiosInstance().get('devices').then(res => setUserDevices(res.data));
        }
        else{
            getAxiosInstance().get(`devices/${user.id}`).then(res => setUserDevices(res.data));
        }
    },[user.id, user.isAdmin, userDevices]);

    const socket = useContext(WebsocketContext);

    useEffect( () => {
        getAxiosRabbitInstance().get('/producer');
        socket.on('connect', () => {
            console.log('connected');
        })
        socket.on('onMessage',(data) => {
            console.log('Received the message. Exceeded max');
            addNotification({
                title: 'Warning',
                message:'A device has exceeded the max consumption',
                native:true         
              });
        })
        return () => {
            console.log('disconnecting...');
            socket.off('connect');
            socket.off('onMessage');
        }
    },[])

    useEffect(() => {
        socket.emit('message','gibe pls');
    })

    return <div>
            <Notifications />
            <div style = {{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                {userDevices.map(device => <DeviceCard id={device.id} description={device.description} address={device.address} maxHrEnergyConsumption={device.maxHrEnergyConsumption} userId={device.userId} isAdmin={user.isAdmin} onShow={() => {setShow(true); setModalData(device)}} onDelete={() => deleteDevice(device.id)}/>)}
            </div>
            {show ? <DeviceModal device={modalData} onClose={() => setShow(false)}/> : null}
    </div>
}

export default DevicePage;