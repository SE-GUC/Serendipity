import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class SimpleCard extends React.Component {
    state = {
        title: '',
        response: '',
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/` + this.props.cid)
            .then(res => {
                const ans = res.data.data;
                var course = '';

                course +=
                    (ans.eduOrganisation ? "(Educational Organisation : " + ans.eduOrganisation + ") " : "") +
                    (ans.duration ? "(Duration : " + ans.duration + ") " : "") +
                    (ans.eduactor ? "(Educator :" + ans.eduactor + ") " : "") +
                    (ans.price ? "(Price : " + ans.price + ") " : "") +
                    (ans.description ? "(Description : " + ans.description + ") " : "") +
                    (ans.location ? "(Location : " + ans.location + ") " : "")

                this.setState({ title: ans.title, response: course })
            })
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">{this.state.title}</Typography>
                    <p>{this.state.response}</p>
                </CardContent>
                <CardActions>
                    <Button size="small">view applicants</Button> 
                </CardActions>
            </Card>
        );
    }
}


export default withStyles(styles)(SimpleCard);
