import React from 'react';
import {Cards, Charts, Countrypicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
	state={
		data:{},
	}

   componentDidMount()
 {
 	 const fetchedData = await fetchData();

	 this.setState({data: fetchedData})

 }
  render()
  {
		const { data } = this.state; //
	  return (
		<div className={styles.container}>

		 <Cards data={data}/>
		 <Charts/>
		 <Countrypicker/>
     
		</div>
	  );
   }
}

export default App;
