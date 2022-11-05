import { useEffect, useRef, useState } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import ConsumptionChart from "../chart/chart";

export interface Device{
    id: string;
    description?: string;
    address?: string;
    maxHrEnergyConsumption?: number;
    userId?: string;
    isAdmin?: boolean;
    onShow?: any;
    onDelete?: any;
}

const DeviceCard: React.FC<Partial<Device>> = (props: Partial<Device>): JSX.Element => {

    const [showChart, setShowChart] = useState(false);
    const date = useRef(new Date());
    const consumption = [{day: 6, hour: 12, consumption: 10}, {day: 6, hour: 13, consumption: 15}, {day: 6, hour: 14, consumption: 5}, {day: 6, hour: 15, consumption: 22}];
    const filteredConsumption = useRef([{day: 0, hour: 0, consumption: 0}]);

    useEffect(() => {
        filteredConsumption.current = consumption.filter(entry => entry.day === new Date(date.current).getDate());
    },[consumption, date]);

    return <div style={{display: 'block', width: 'fit-content', height: 'fit-content', borderRadius: '10px', padding: 10, margin: 20, backgroundColor: "orange", fontSize:15}}>
        <Card>
            <CardBody>
                <CardText>
                    {props.description}
                </CardText>
                <CardText>
                    {props.address}
                </CardText>
                <CardText>
                    {props.maxHrEnergyConsumption} kWH
                </CardText>
                {props.isAdmin 
                ? <span><button type="button" onClick={props.onShow}>Edit</button> <button type = "button" onClick={props.onDelete}>Delete</button></span>
                : [<button type={"button"} onClick={() => setShowChart(true)}>Consumption</button>,  <input type="date" onChange={(event: any) => {date.current = event.target.value; console.log(date);}}></input>]
                }
            </CardBody>
           
        </Card>
        {showChart ? <ConsumptionChart data={filteredConsumption.current} onClose={() => setShowChart(false)}/> : null}
    </div>

}

export default DeviceCard;

