import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import styles from './ThankYou.module.css';

import {
    Box,
    Container,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Stack,
    InputLabel,
    TextField,
    // SentimentVeryDissatisfiedIcon,
    // SentimentDissatisfiedIcon,
    // SentimentSatisfiedIcon,
    // SentimentVerySatisfiedIcon,
    // SentimentSatisfiedAltIcon,
    // StyledRating,
    Typography,
} from '@mui/material';

import { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import thanksImg from '../../../assets/Images/thankForm.svg';
// import confuse from "../../assets/Images/confuse.png"
// import architect from "../../assets/Images/architect.jpg"
// import advocate from "../../assets/Images/advocate.jpg"
// import adventurer from "../../assets/Images/adventurer.jpg"
// import campaigner from "../../assets/Images/campaigner.jpg"
// import consul from "../../assets/Images/consul.jpg"
// import entertainer from "../../assets/Images/entertainer.jpg"
// import commander from "../../assets/Images/commander.jpg"
// import logician from "../../assets/Images/logician.jpg"
// import debater from "../../assets/Images/debater.jpg"
// import mediater from "../../assets/Images/mediater.jpg"
// import virtuoso from "../../assets/Images/virtuoso.jpg"
// import logistician from "../../assets/Images/logistician.jpg"
// import protagonist from "../../assets/Images/protagonist.jpg"
// import executive from "../../assets/Images/executive.jpg"
// import defender from "../../assets/Images/defender.jpg"
// import debaterentrepreneur from "../../assets/Images/debaterentrepreneur.jpg"

const FormThankyou = () => {
    const navigate = useNavigate();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(undefined);
    const [sentence, setSentence] = useState("");
    const [type, setType] = useState("");
    const [time, setTime] = useState({ s: 59, m: 1 });
    const [image, setImage] = useState("");
    const [create, setCreate] = useState([]);
    const [data, setData] = useState([]);
    const componentref = useRef();
    const handleClick = (value) => {
        setRating(value);
    };

    const handleMouseOver = (value) => {
        setHover(value);
    };

    const handleMouseLeave = () => {
        setHover(undefined);
    };

    const arr = ["Congratulations you displayed a Planner personality type!  These detail-oriented strategists love perfection. Whether it's finding the perfect gift for a loved one or finishing a project at work, they allocate their time and energy to different aspects of their lives. However, their inner world is complex and often private.",
        "Congratulations you displayed a Rationalist personality type!The adaptable and open-minded type achiever has an ambition like no other personality types. They combine a willingness to adapt with creative intelligence, allowing them to see unconventional solutions to common issues.",
        "Congratulations you displayed a Master personality type! People with the ESTJ personality type are generally confident and creative visionaries. They excel at decision-making and thrive on the challenges and accomplishments that come hand-in-hand with being an ESTJ.",
        "Congratulations you displayed an Orator personality type!  They consider themselves highly creative and innovative, with a passion for rejecting convention and tradition. They enjoy the challenge of solving problems no one else can solve. They hold steadfast to their beliefs, accept new challenges eagerly, and are more likely than others to stick with a problem until they find a solution. ",
        " Congratulations you displayed an Exponent personality type! That said, they can appear shy, reserved, and cautious. Sensible and always open to reason, they are fundamentally honest and ethical.Some exponents see themselves as a family of volunteers, and are always looking for ways to step in and speak up for those that are in need.",
        "Congratulations you displayed an arbitrator personality type! They tend to have the character traits of childhood, such as being sensitive, creative, and open.These rare personality types tend to be quiet, creative, and imaginative, and they put a caring and compassionate approach to everything that they do.",
        "Congratulations you displayed a Supporter personality type! These outgoing, charismatic people are highly ambitious. They enjoy being the center of attention, and love being part of a team. They will go to great lengths to achieve their ambitions.These Warm-hearted, generous types are social and happy to talk to anyone. ",
        "Congratulations you displayed a Crusader personality type! Personality traits that tend to be associated with crusaders include having idealistic attitudes and beliefs that arise from idealism. Their vibrant energy can flow in many directions, including philanthropy, social reform, idealism, religion, and improving the quality of life for others.",
        "Congratulations you displayed a  signaller  personality type! They carry themselves quite methodically, thoughtfully carrying out their actions with purposeful and well-thought-out steps. They're somewhat emotionally distant, mainly preferring to keep their feelings to themselves, although they tend to hide their emotions from others rather than express them.",
        "Congratulations you displayed a Protector personality type! These people are kind and gentle souls with an even temperament. They tend to be reliable and responsible. They diligently pay attention to detail, whether in professional or personal endeavors.These people are likely to keep their interactions short and sweet, but they have great balance in all that they do. ",
        "Congratulations you displayed an Administrator personality type. They possess high emotional stability, and are able to calmly and confidently make important decisions under pressure. They willingly accept greater challenges and are not afraid to lead by example. They enjoy taking up leadership roles and looking out for the good of others",
        " Congratulations you displayed a Diplomat personality type! Their primary personality traits are decisiveness and influence. They enjoy supporting their community, and they strongly value achievement. They are impartial, and are professional and kind.hey put emphasis on the achievement of goals, but they also believe that they should contribute to the greater good.",
        "Congratulations on displaying a Genius personality type! They are known for being very task-oriented, although they have a diverse professional background and diverse set of interests that can easily interweave due to the job landscape today. They generally avoid small talk and are more purposeful with language.",
        "Congratulations, you displayed an Explorer personality type! They tend to have an open mindset. They are open-minded about new things, open to opportunities, but approach everything in life without judgement. Their positivity helps to uncover new opportunities and possibilities in the future.",
        "Congratulations you displayed a Tycoon personality type!  This type is creative, energetic, and insightful, often excelling in fields like engineering, geology, and editing. Drawing on powers of observation, they often exhibit curiosity and open-mindedness, making them able to perceive themselves and the world around them accurately.",
        " Congratulations you displayed an  Artist personality type! They long for new experiences.These people are never content with the status quo.They are very energetic, love to have a social life and can attract others into sharing activities."];
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // const picture = [
    //     architect, logician, commander, debater, advocate, mediater, protagonist, campaigner, logistician, defender, executive, consul, virtuoso,
    //     adventurer, debaterentrepreneur, entertainer
    // ];

    const personality = [
        "Planner", "Rationalist", "Master", "Orator", "Exponent", "Arbitrator", "Supporter", "Crusader", "Signaller", "Protector", "Administrator", "Diplomat", "Genius",
        "Explorer", "Tycoon", "Artist"
    ];

    const a = Math.floor(Math.random() * 16);
    useEffect(() => {
        setSentence(arr[a]);
        // setImage(picture[a]);
        setType(personality[a]);
    }, arr, personality);
    // }, arr, picture, personality);

    var updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM === 0 && updatedS === 0) {
            return;
        }
        if (updatedS === 0) {
            updatedM--;
            updatedS = 60;
        }
        updatedS--;
        return setTime({ m: updatedM, s: updatedS });
    };

    setInterval(run, 1000);

    //     const StyledRating = styled(Rating)(({ theme }) => ({
    //   '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    //     color: theme.palette.action.disabled,
    //   },
    // }));

    // const customIcons = {
    //     1: {
    //         icon: <SentimentVeryDissatisfiedIcon color="error" />,
    //         label: 'Very Dissatisfied',
    //     },
    //     2: {
    //         icon: <SentimentDissatisfiedIcon color="error" />,
    //         label: 'Dissatisfied',
    //     },
    //     3: {
    //         icon: <SentimentSatisfiedIcon color="warning" />,
    //         label: 'Neutral',
    //     },
    //     4: {
    //         icon: <SentimentSatisfiedAltIcon color="success" />,
    //         label: 'Satisfied',
    //     },
    //     5: {
    //         icon: <SentimentVerySatisfiedIcon color="success" />,
    //         label: 'Very Satisfied',
    //     },
    // };

    // const IconContainer = (props) => {
    //     const { value, ...other } = props;
    //     return <span {...other}>{customIcons[value].icon}</span>;
    // }


    return (
        <>
            <Box p={3} sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} maxWidth="lg">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box my={2}>
                            <img src={thanksImg} alt="ThankYou" width={200} />
                        </Box>
                        <Typography mb={3} align='center' variant='h4'>Great, your interaction is now complete!</Typography>
                        <Typography color='primary' align='center' paragraph>This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.</Typography>
                        <Typography color='red' align='center' paragraph> Every human interaction is an opportunity to learn. It's also an opportunity to demonstrate your skills and
                            expertise in a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are
                            likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interactions act
                            as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but
                            they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster.</Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box p={2} mb={2} maxWidth="lg">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <CardHeader sx={{ backgroundColor: "#1976d2", width: '100%' }} align='center' title={`Congratulations ${localStorage.getItem('Name')}, you are a ${type}`} />
                                <Grid sm={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }} my={5}>
                                    <img src={image} sx={{ display: 'flex', justifyContent: 'center' }} alt="personality" />
                                </Grid>
                                <Grid sm={8} md={8}>
                                    <Typography mb={3} align='center' variant='h6'>{sentence}</Typography>
                                </Grid>
                                    {/* <div className='card-footer'>
                                <div className='d-flex justify-content-center mx-auto gap-2'>
                                <div className='d-grid col-md-6'>
                                <button type="button" className="btn btn-dark" style={{ backgroundColor: "#282a2d", border: "#282a2d", borderRadius: "0" }} onClick={() => exportComponentAsPNG(componentref)}>Download Card!</button>
                                    </div>
                                    <div className='d-grid col-md-6'>
                                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#socialShareModal" style={{ backgroundColor: "#282a2d", border: "#282a2d", borderRadius: "0" }}>Share On Social Media</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                                <CardHeader sx={{ backgroundColor: "#1976d2", width: '100%' }} align='center' title={`Congratulations ${localStorage.getItem('Name')}, you are a ${type}`} />
                    </CardContent>
                </Card>
            </Box>
            <Box p={2} maxWidth="lg">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography mb={3} align='center' color='primary' variant='h6'>How was your test taking experience?</Typography>
                        {/* <StyledRating
                            name="highlight-selected-only"
                            defaultValue={2}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                        /> */}
                        <Stack mb={1} sx={{ width: '100%' }}>
                            <InputLabel sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#1976d2' }}>Question</InputLabel>
                            <TextField
                                multiline
                                fullWidth
                                size='small'
                                maxRows={3}
                                minRows={3}
                                placeholder="Your Feedback"
                            />
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default FormThankyou
