import React, { Component } from 'react';
import styles from './SearchBox.module.css'
import search from '../../assets/images/search.png'
import { withRouter } from "react-router";
import ReactTooltip from 'react-tooltip'

//tova tuk shte vzima samo vytreshnoto sydyrjanie na sercha i shte go predade prez url
//na stranicata za tyrsene
// tam po url, shte se pokajat filtriranite neshta

// shte proverq slojeneto v poleto , dali ima intervali, splitvame dumite po interval 
// proverqvame stojnostie, dali ima nqkakyv izlishen simvol (da ostanat samo bukvi) , ako ima - mahame dumata

// predavame kliuchovite dumi v url kym stranicata na tyrseneto i ot tam, 
// byrkame v stora i si vzimame kakvoto ni trqbva


class SearchBox extends Component {

    state = {
        searchingFor : '',
        open : false
    }

    setSearch = e =>{
        const value = e.target.value;
        const searchingFor = value;
        this.setState({ searchingFor })
    }

    // onFocus = () =>{
    //     let focus = false;
    //     if (!this.state.focus){
    //         focus = true;
    //     }
    //     this.setState({ focus })
    // }

    submitSearch = () => {    

        //pri tyrseneto pravim vsichko s malki bukvi, zashtoto malkite i golemite ne sa ==
        const searchingFor = this.state.searchingFor
        
        let searchArray = searchingFor.split(' ')
        console.log('searchBox searchArray:');
        console.log(searchArray)
        //filtrirai tezi, koito ne sydyrjat razlichno ot bukvi
        searchArray = searchArray.filter(word => (/^[a-zA-Z0-9]*$/.test(word)  === true))
        let param = searchArray.join('-');
      console.log('search box param sa :')
      console.log(param)
        this.props.history.push("/Search/"+param);

    }
    toggle =()=>{
        const open = !this.state.open
        this.setState({ open })
    }

    render(){

        let classesInput = [styles.SearchInput]
        if(this.state.open){
            classesInput.push(styles.open)
        }
        

        return(
            <div className={styles.SearchBox} >                 
                <form className={styles.SearchContainer} onSubmit={this.submitSearch}>
            
                        <input 
                        data-tip=" Only words separated with space"
                            type = "text" 
                            maxLength ="20"  
                            placeholder='Tyrsi vuv vsichki oferti' 
                            onChange={this.setSearch} 
                            value = {this.state.searchingFor}
                            onClick={this.onFocus}
                            className ={classesInput.join(" ")}
                            >
                        </input>
                
                    <ReactTooltip place="bottom" type="light" effect="float" />
                </form>
                <div onClick={this.toggle} className={styles.Picture}>  
                    <img width="50" height="50" src={search} />       
                </div>
            </div>
           
        )
    
    }
}



export default withRouter(SearchBox)