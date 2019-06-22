import React,{Component} from "react"
import Header from "./Header"

class MemeGenerator extends React.Component{
  constructor(){
    super()
    this.state = {
      topText:"",
      bottomText:"",
      randomImg:"https://i.imgflip.com/1bij.jpg",
      allMemeImgs:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      console.log(memes[0])
      this.setState({ allMemesImgs: memes})
    })

  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({[name] : value})
  }

  render(){
    return(
      <div>
          <form className="meme-form">
          <input
              type="text"
              name="topText"
              placeholder="Top Text"
              value={this.state.topText}
              onChange={this.handleChange}
              />
            <input
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
              <button>Gen</button>
          </form>
          <div className="meme">
            <img src={this.state.randomImg} alt=""/>
          </div>
      </div>
    )
  }
}

export default MemeGenerator
