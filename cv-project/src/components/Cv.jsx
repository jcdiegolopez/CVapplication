

export default function Cv({data}){
    return (
        <div className="cv-sheet">
        <div className="left-side">
            <div className="general-section">
                <h1> {data.general.firstname} {data.general.lastname}</h1>
                <ul>
                    <li>{data.general.tel}</li>
                    <li>{data.general.mail}</li>
                </ul>
            </div>
        </div>
        <div className="right-side">
            <div className="study-section">
                <h1>Study Information</h1>
                <ul>
                    <li>{data.study.school}</li>
                    <li>{data.study.title}</li>
                    <li>{data.study.dateStudy}</li>
                </ul> 
            </div>
            <div className="practice-section">
                <h1>Practice Information</h1>  
                <ul>
                    <li>{data.practice.company}</li>
                    <li>{data.practice.position}</li>
                    <li>{data.practice.responsability}</li>
                    <li>{data.practice.started}</li>
                    <li>{data.practice.finished}</li>

                </ul>  
            </div>
        </div>

        </div>
    );
}