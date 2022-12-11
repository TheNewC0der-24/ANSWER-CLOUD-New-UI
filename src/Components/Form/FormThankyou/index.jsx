import React, { useState, useEffect, useRef } from 'react';
// import styles from './ThankYou.module.css';

import {
    Box,
    Container,
    Card,
    CardContent,
    Grid,
    Stack,
    TextField,
    Button,
    Rating,
    Typography,
} from '@mui/material';

import { exportComponentAsPNG } from 'react-component-export-image';

import thanksImg from '../../../assets/Images/thankForm.svg';
import architect from "../../../assets/Images/architect.jpg"
import advocate from "../../../assets/Images/advocate.jpg"
import adventurer from "../../../assets/Images/adventurer.jpg"
import campaigner from "../../../assets/Images/campaigner.jpg"
import consul from "../../../assets/Images/consul.jpg"
import entertainer from "../../../assets/Images/entertainer.jpg"
import commander from "../../../assets/Images/commander.jpg"
import logician from "../../../assets/Images/logician.jpg"
import debater from "../../../assets/Images/debater.jpg"
import mediater from "../../../assets/Images/mediater.jpg"
import virtuoso from "../../../assets/Images/virtuoso.jpg"
import logistician from "../../../assets/Images/logistician.jpg"
import protagonist from "../../../assets/Images/protagonist.jpg"
import executive from "../../../assets/Images/executive.jpg"
import defender from "../../../assets/Images/defender.jpg"
import debaterentrepreneur from "../../../assets/Images/debaterentrepreneur.jpg"

const FormThankyou = () => {

    const [rating, setRating] = useState(0);

    const [sentence, setSentence] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");

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
    const picture = [
        architect, logician, commander, debater, advocate, mediater, protagonist, campaigner, logistician, defender, executive, consul, virtuoso,
        adventurer, debaterentrepreneur, entertainer
    ];

    const personality = [
        "Planner", "Rationalist", "Master", "Orator", "Exponent", "Arbitrator", "Supporter", "Crusader", "Signaller", "Protector", "Administrator", "Diplomat", "Genius",
        "Explorer", "Tycoon", "Artist"
    ];

    const a = Math.floor(Math.random() * 16);
    useEffect(() => {
        setSentence(arr[a]);
        setImage(picture[a]);
        setType(personality[a]);
        // }, arr, personality);
    }, arr, picture, personality);


    const cardRef = useRef();

    return (
        <>
            <Container sx={{ marginTop: "2rem" }} maxWidth="md">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box my={2}>
                            <img src={thanksImg} alt="ThankYou" width={200} />
                        </Box>
                        <Typography mb={3} align='center' variant='h4'>Great, your interaction is now complete!</Typography>
                        <Typography color='red' align='center' paragraph>
                            This will now be analyzed by our AI
                            models (and coaches/HR managers, if applicable). You or your administrator will receive a
                            detailed feedback on the same within next 72 hours.
                        </Typography>
                        <Typography align='center' paragraph>
                            Every human interaction is an opportunity to learn. It's also an opportunity to demonstrate your skills and
                            expertise in a specific context and capacity. We view every professional interaction as a high-stakes game - whether you are
                            likely to save money, generate revenue, make a process more efficient or improve your performance. These virtual interactions act
                            as practice sessions where you can test drive real-world interactions. Experts in the world may differ on what skills matter - but
                            they all have a common point of view. Practice is the key to improvement - and specific feedback makes improvement faster.</Typography>
                    </CardContent>
                </Card>
            </Container>

            <Container sx={{ marginTop: "2rem" }} maxWidth="md">
                <Card>
                    <CardContent ref={cardRef} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box mb={3} p={2} sx={{ backgroundColor: "#1976d2", width: '100%' }} align='center'>
                            <Typography color='white' align='center' variant='h5'>{`Congratulations name, you are a ${type}`}</Typography>
                        </Box>
                        <Grid container>
                            <Grid xs={12} sm={12} md={4} sx={{ display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={image} alt="personality" />
                            </Grid>
                            <Grid xs={12} sm={12} md={8} p={2} sx={{ margin: "auto", textAlign: { xs: "center", sm: "center", md: "justify", lg: "justify" } }}>
                                <Typography variant='subtitle1'>{sentence}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                        <Button sx={{ marginBottom: "1rem" }} onClick={() => exportComponentAsPNG(cardRef)} variant='contained'>
                            Download
                        </Button>
                    </Box>
                </Card>
            </Container>

            <Container sx={{ marginTop: "2rem" }} maxWidth="md">
                <Card sx={{ backgroundColor: "#F7F8F9" }}>
                    <CardContent>
                        <Typography mb={3} align='center' variant='h6'>How was your test taking experience?</Typography>

                        <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                size="large"
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </Box>
                        <Stack mt={3} mb={3} sx={{ width: '100%' }}>
                            <TextField
                                multiline
                                fullWidth
                                size='small'
                                maxRows={3}
                                minRows={3}
                                placeholder="Your Feedback"
                            />
                        </Stack>
                        <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                            <Button variant='contained' color='primary'>Submit Feedback</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default FormThankyou
