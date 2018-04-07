import React from "react";
import "./Logo.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Logo = () => (
<div className="lil_logo">
	<Link to="/"><img src="img/myLlama_updated.png" alt="logo" className="navlogo img img-fluid"/>
	  	</Link>
</div>
);

export default Logo;
