import { Alert } from "antd";


function InfoAlert() {
    return (
        <div>
            <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
        </div>
    );
}

export default InfoAlert;
