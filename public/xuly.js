class KhoaPham extends React.Component{
    render(){
        return (
            <div>
                    <h1 className = "yellow"> Khoa Pham React </h1>
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
 <KhoaPham/>
 <KhoaPham/>
 <KhoaPham/>
 </div>,
document.getElementById('root'));

