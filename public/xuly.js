function getName(){
    alert(name);
}


class KhoaPham extends React.Component{
a()
{
    getName(this.props.giangvien)
},

    layThongTin:function() {
        alert(this.props.children);
        
    },
    render(){
        return (
            <div>
                    <h1 className = "yellow"> {this.props.ten} -{this.props.giangvien} </h1>
                    <p>{this.props.children}</p>
                    <button onClick={()=>{var str = this.props.ten+' '+this.props.giangvien; getName(str)}}>Thong tin</button>
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

