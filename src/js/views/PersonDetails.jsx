import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonDetails = () => {
	
	const { actions, store } = useContext(Context)

	


	return (

		<div className="text-center mx-auto ">


			<h1>Character Details</h1>

			{JSON.stringify(store.oneChar) !== '{}' ?(
			<div className="card text-start mx-auto"
				style={{ width: "60%" }} key="index">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${store.oneChar.result.uid}.jpg`} className="card-img-top mx-auto mt-2" style={{ height: "60%", objectFit: "cover", borderRadius: "20px",width: "50%" }} alt="..." />
				<div className="card-body" style={{ height: "13rem", overflow: "scroll" }}>
					<h5 className="card-title">Name: {store.oneChar.result.properties.name} </h5>

					<div className="row">
						<div className="col-12 mx-auto">
							<h5 className="row ">Description:</h5>
							<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' />Además de la raza humana, se describen múltiples tipos de especies extraterrestres procedentes de los numerosos planetas y satélites que forman dicha galaxia y que pertenecen a la alianza de planetas de la República Galáctica.</p>
							<div className="row">
								<h5 className="col ">Eye color:</h5>
								<p className="col ">{store.oneChar.result.properties.eye_color}</p>
								<h5 className="col ">Hair color:</h5>
								<p className="col ">{store.oneChar.result.properties.hair_color}</p>
								<h5 className="col ">Gender:</h5>
								<p className="col ">{store.oneChar.result.properties.gender}</p>
								<h5 className="col ">Height:</h5>
								<p className="col ">{store.oneChar.result.properties.height}</p>
								<h5 className="col ">Birth year:</h5>
								<p className="col ">{store.oneChar.result.properties.birth_year}</p>
							</div>
						</div>



					</div>
				</div>




				<Link to="/home" className="btn btn-warning m-3">Back to Home</Link>

			</div>
			):(
				<h1>No only one selected</h1>
			)}
		</div>
	)


};

export default PersonDetails;
