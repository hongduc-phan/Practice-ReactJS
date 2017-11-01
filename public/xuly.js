class KhoaPham extends React.Component{
    render(){
        return (
            <div>
                    <h1 className = "yellow"> {this.props.ten} -{this.props.giangvien} </h1>
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
 <KhoaPham ten="React JS" giangvien="EKW"/>
 <KhoaPham ten="Node JS" giangvien="DSE"/>
 <KhoaPham ten="Angular JS"giangvien="ABC"/>
 </div>,
document.getElementById('root'));

