import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
    del: {
        color: '#FF0000',
    },
    noApplicants: {
        color: '#333',
        fontSize: 13,
    }
};

class SimpleCard extends React.Component {
    state = {
        title: '',
        response: 'loading ...',
        applicants: undefined,
        store: '',
        deleting: '',
    };
    componentDidMount() {
        const ans = this.props.course;
        var course = '';

        course +=
            (ans.eduOrganisation ? "(Educational Organisation : " + ans.eduOrganisation + ") " : "") +
            (ans.duration ? "(Duration : " + ans.duration + ") " : "") +
            (ans.educator ? "(Educator :" + ans.educator + ") " : "") +
            (ans.price ? "(Price : " + ans.price + ") " : "") +
            (ans.description ? "(Description : " + ans.description + ") " : "") +
            (ans.location ? "(Location : " + ans.location + ") " : "")

        axios.get(`http://localhost:5000/api/courses/${this.props.cid}/applicants`)
            .then(res => {
                const app = res.data.data;
                var mems =
                    <div>
                        {app.map(member => (
                            <div>
                                <text >{"Name: " + member.name +
                                    "   email: " + member.email +
                                    "   location: " + member.location +
                                    "   attended events: " + member.attendedEvents +
                                    "   previousJobs: " + member.previousJobs +
                                    "   interests: " + member.interests + "  id: " + member._id}
                                </text>
                                <br></br>
                            </div>
                        ))}
                    </div>
                if (app.length === 0)
                    mems = <p style={styles.noApplicants}>No applicants</p>
                this.setState({ title: ans.title, response: course, store: mems })
            })
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">{this.state.title}</Typography>
                    <p>{this.state.response}</p>
                    <br />
                    {this.state.applicants}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => this.handleClick()}>view applicants</Button>
                    <Button size="small" onClick={() => this.handleDelete()}>delete course</Button>
                    <Link to={`/updateCourse/${this.props.cid}`}>Update</Link>
                    {this.state.deleting}
                </CardActions>
            </Card>
        );
    }
    handleClick() {
        if (!this.state.applicants)
            this.setState({ applicants: this.state.store })
        else
            this.setState({ applicants: undefined })
    }
    handleDelete() {
        console.log('init')
        this.setState({ deleting: <div><br /><p style={styles.del}>deleting ...</p></div> })
        axios.delete(`http://localhost:5000/api/courses/${this.props.cid}`)
            .then((res) => { window.location.reload(); console.log('ay7aga') })

    }
    
}


export default withStyles(styles)(SimpleCard);
