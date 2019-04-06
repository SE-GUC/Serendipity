import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
        response: '',
    };

    componentDidMount() {
        // this.setState({response:'1'})
        axios.get(`http://localhost:5000/api/courses/5c969130da7f7813cc2e4cb1`)//this.props.cid)
            .then(res => {

                this.setState({ response: '2' })
                var course = '';
                const ans = res.data.data;
                course +=
                    (ans.title ? "(Title : " + ans.title + ") " : "") +
                    (ans.eduOrganisation ? "(Educational Organisation : " + ans.eduOrganisation + ") " : "") +
                    (ans.duration ? "(Duration : " + ans.duration + ") " : "") +
                    (ans.eduactor ? "(Educator :" + ans.eduactor + ") " : "") +
                    (ans.price ? "(Price : " + ans.price + ") " : "") +
                    (ans.description ? "(Description : " + ans.description + ") " : "") +
                    (ans.location ? "(Location : " + ans.location + ") " : "")

                this.setState({ response: course })
            })

        // this.setState({response:'3'})
    }

    render() {
        return (
            <Card>
                <CardContent>
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
