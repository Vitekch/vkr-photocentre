import "./Loading.css";
import { Progress } from "antd";

const LoadingComp = ({ percent, error }) => {

    return (
        <div className="loading-overlay">
            <Progress
                strokeWidth={3}
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                type="circle"
                percent={percent}
                status={error ? "exception" : ""}
            />
        </div>
    )
}

export default LoadingComp;