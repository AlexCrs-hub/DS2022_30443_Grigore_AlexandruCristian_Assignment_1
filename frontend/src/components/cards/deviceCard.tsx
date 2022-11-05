import { useState } from "react";
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

    const [date, setDate] = useState(new Date());

    const consumption = [{hour: 12, consumption: 10}, {hour: 13, consumption: 15}, {hour: 14, consumption: 5}, {hour: 15, consumption: 22}];

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
                : [<button type={"button"} onClick={() => setShowChart(true)}>Consumption</button>,  <input type="date" onChange={(event: any) => {console.log(date); setDate(event.target.value); console.log(date)}}></input>]
                }
            </CardBody>
           
        </Card>
        {showChart ? <ConsumptionChart data={consumption} onClose={() => setShowChart(false)}/> : null}
    </div>

}

export default DeviceCard;

