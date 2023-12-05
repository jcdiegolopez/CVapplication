

export default function Cv({data, onClick}){
    return (
        <div className="cv-sheet" id="printable" onClick={onClick}>
        <div className="left-side">
            <div className="general-section">
                <h1> {data.general.firstname} {data.general.lastname}</h1>
                <ul>
                    <li>+ {data.general.tel}</li>
                    <li>+ {data.general.mail}</li>
                </ul>
            </div>
        </div>
        <div className="right-side">
            <div className="study-section">
            <h1>Study Information</h1>
            <ul>
                <li><strong>School:</strong> {data.study.school}</li>
                <li><strong>Title:</strong> {data.study.title}</li>
                <li><strong>Date finished:</strong> {data.study.dateStudy}</li>
            </ul>
            </div>
            <div className="practice-section">
            <h1>Practice Information</h1>  
            <ul>
                <li><strong>Company:</strong> {data.practice.company}</li>
                <li><strong>Position:</strong> {data.practice.position}</li>
                <li><strong>Responsability:</strong> {data.practice.responsability}</li>
                <li><strong>Date started:</strong> {data.practice.started}</li>
                <li><strong>Date finished:</strong> {data.practice.finished}</li>
            </ul>
            </div>
        </div>

        </div>
    );
}