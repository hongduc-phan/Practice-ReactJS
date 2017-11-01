function getName(){
    alert(name);
}


class KhoaPham extends React.Component{

addStudent(){
    this.setState({tongHocVien:this.state.tongHocVien+1});
},

    layThongTin:function() {
        alert(this.props.children);
        
    },

    getInitialState()
    {
        return{tongHocVien: 10};
    },
    render(){
        return (
            <div>
                    <h1 className = "yellow"> {this.props.ten} -{this.props.giangvien} </h1>
                    <div>so hoc vien: {this.state.tongHocVien}</div>
                    <p>{this.props.children}</p>
                    <button onClick={()=>{var str = this.props.ten+' '+this.props.giangvien; getName(str)}}>Thong tin</button>
                    <button onClick={this.addStudent}>Them hoc vien</button>
                    <KhoaHoc/>
                    </div>
                );
            }
    
};

class KhoaHoc extends React.Component{
    render(){
        return (
                    <h1 className = "red"> Khoa Pham React </h1>
                );
            }
    
};

ReactDOM.render(
<div>
 <KhoaPham ten="React JS" giangvien="EKW">Phan Hong Duc</KhoaPham>
 <KhoaPham ten="Node JS" giangvien="DSE"/>
 <KhoaPham ten="Angular JS"giangvien="ABC"/>
 </div>,
document.getElementById('root'));

