import { useParams } from "react-router";

const ProjectDetails = () => {
    const id = useParams().id;
    return ( 
        <div className="container project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {`Project Title -${id}`}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt, molestias ducimus hic a sapiente, excepturi qui exercitationem expedita architecto aliquid dolores sequi laborum velit repellat at illo. Qui suscipit reiciendis impedit at in, ipsam voluptates excepturi, dicta ipsum obcaecati, laborum eaque quasi odio aspernatur optio nostrum sunt natus laudantium.
                    </p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By Shudhanshu</div>
                        <div>11th September, 10AM</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;