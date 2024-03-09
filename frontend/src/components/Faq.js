import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Faq = () => {
    return (
        <div className='flex flex-col my-[3rem]'>
            <div className='flex flex-col gap-[0.2rem] mx-auto items-center mb-[1rem]' >

                <h3 className='text-bold text-[2rem] underline-offset-4'>Frequently Asked Questions</h3>
                <div className='h-[0.2rem] w-[10rem] bg-[#2874fc]' />
            </div>
            <div>
                <div className='w-[80%] mx-auto flex flex-col gap-[1rem]'>
                    <Accordion className='border-2 border-blue-300'>
                        <AccordionSummary
                            expandIcon={<AddCircleIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"

                        >
                            <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>What is BridgeLine?</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-gray-500 '>
                                BridgeLine is a cutting-edge Cross Border Payments Portal that revolutionizes global transactions. It serves as a convergence point for Web3, blockchain, and machine learning technologies, offering a range of features to enhance efficiency, reduce costs, and provide unparalleled security in cross-border payments. With bridgeLine, you can experience the future of financial transactions and unlock a world of possibilities.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='border-2 border-blue-300'>
                        <AccordionSummary
                            expandIcon={<AddCircleIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"

                        >
                            <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Why use BridgeLine?</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-gray-500 '>
                                BridgeLine offers a revolutionary approach to cross-border payments, leveraging the latest advancements in Web3, blockchain, and machine learning technologies. By choosing bridgeLine, you benefit from Cost-efficient transactions,
                                Streamlined international education fee payments,
                                Reduced import duties,
                                Flexibility with scheduled payments,
                                Advanced expense tracking and analytics,
                                Enhanced user experience with a customer support chatbot,
                                Rewards based on credit score.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-2 border-blue-300'>
                        <AccordionSummary
                            expandIcon={<AddCircleIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"

                        >
                            <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Is bridgeLine secure?</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-gray-500 '>
                                Yes, bridgeLine prioritizes security by leveraging blockchain technology, which ensures transparency and immutability of transactions. Additionally, our platform employs advanced encryption techniques to safeguard your data and funds during cross-border transactions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-2 border-blue-300'>
                        <AccordionSummary
                            expandIcon={<AddCircleIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"

                        >
                            <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>How can I trust bridgeLine with my financial transactions?</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='text-gray-500 '>
                                BridgeLine is built upon the principles of trust and transparency. Our platform's decentralized nature ensures that transactions are verified and recorded on the blockchain, providing you with a secure and reliable environment for conducting cross-border payments. Moreover, our commitment to compliance and adherence to regulatory standards further reinforces the trustworthiness of bridgeLine.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-2 border-blue-300'>
                        <AccordionSummary
                            expandIcon={<AddCircleIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"

                        >
                            <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Is bridgeLine available globally?</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='font-bold yantramanav-regular text-[1.3rem]'
                            >
                                Yes, bridgeLine is accessible worldwide, allowing users from any country to benefit from its innovative features and conduct cross-border transactions seamlessly.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>

        </div>
    )
}

export default Faq