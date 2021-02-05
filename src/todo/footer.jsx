import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author: 'Li-Weixin'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
                <br/>
                <a href="https://github.com/Li-WeiXin/Muke-Pro" target="_blank">
                    To Author's Github
                </a>
            </div>
        )
    }
}