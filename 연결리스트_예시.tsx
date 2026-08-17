import { useState } from "react";

interface IdnttEventNodeType {
    Idntt_e_mem_name: string;
    Idntt_e_link: IdnttEventNodeType | null;
}

export default function IdnttEvent() {
    const [Idntt_e_node1, setIdntt_e_node1] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "1번", Idntt_e_link: null });
    const [Idntt_e_node2, setIdntt_e_node2] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "2번", Idntt_e_link: null });
    const [Idntt_e_node3, setIdntt_e_node3] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "3번", Idntt_e_link: null });
    const [Idntt_e_node4, setIdntt_e_node4] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "4번", Idntt_e_link: null });
    const [Idntt_e_node5, setIdntt_e_node5] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "5번", Idntt_e_link: null });
    const [Idntt_e_node6, setIdntt_e_node6] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "6번", Idntt_e_link: null });
    const [Idntt_e_node7, setIdntt_e_node7] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "7번", Idntt_e_link: null });
    const [Idntt_e_node8, setIdntt_e_node8] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "8번", Idntt_e_link: null });
    const [Idntt_e_node9, setIdntt_e_node9] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "9번", Idntt_e_link: null });
    const [Idntt_e_node10, setIdntt_e_node10] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "10번", Idntt_e_link: null });
    const [Idntt_e_node11, setIdntt_e_node11] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "11번", Idntt_e_link: null });
    const [Idntt_e_node12, setIdntt_e_node12] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "12번", Idntt_e_link: null });
    const [Idntt_e_node13, setIdntt_e_node13] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "13번", Idntt_e_link: null });
    const [Idntt_e_node14, setIdntt_e_node14] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "14번", Idntt_e_link: null });
    const [Idntt_e_node15, setIdntt_e_node15] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "15번", Idntt_e_link: null });
    const [Idntt_e_node16, setIdntt_e_node16] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "16번", Idntt_e_link: null });
    const [Idntt_e_node17, setIdntt_e_node17] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "17번", Idntt_e_link: null });
    const [Idntt_e_node18, setIdntt_e_node18] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "18번", Idntt_e_link: null });
    const [Idntt_e_node19, setIdntt_e_node19] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "19번", Idntt_e_link: null });
    const [Idntt_e_node20, setIdntt_e_node20] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "20번", Idntt_e_link: null });

    const Idntt_e_node21 = {
        Idntt_e_mem_name: "21번",
        Idntt_e_link: null,
    };

    const Idntt_e_node1Link = () => {
        setIdntt_e_node1({
            ...Idntt_e_node1,
            Idntt_e_link: Idntt_e_node2
        });
    };

    const Idntt_e_node2Link = () => {
        setIdntt_e_node2({
            ...Idntt_e_node2,
            Idntt_e_link: Idntt_e_node3
        });
    };

    const Idntt_e_node3Link = () => {
        setIdntt_e_node3({
            ...Idntt_e_node3,
            Idntt_e_link: Idntt_e_node4
        });
    };

    const Idntt_e_node4Link = () => {
        setIdntt_e_node4({
            ...Idntt_e_node4,
            Idntt_e_link: Idntt_e_node5
        });
    };

    const Idntt_e_node5Link = () => {
        setIdntt_e_node5({
            ...Idntt_e_node5,
            Idntt_e_link: Idntt_e_node6
        });
    };

    const Idntt_e_node6Link = () => {
        setIdntt_e_node6({
            ...Idntt_e_node6,
            Idntt_e_link: Idntt_e_node7
        });
    };

    const Idntt_e_node7Link = () => {
        setIdntt_e_node7({
            ...Idntt_e_node7,
            Idntt_e_link: Idntt_e_node8
        });
    };

    const Idntt_e_node8Link = () => {
        setIdntt_e_node8({
            ...Idntt_e_node8,
            Idntt_e_link: Idntt_e_node9
        });
    };

    const Idntt_e_node9Link = () => {
        setIdntt_e_node9({
            ...Idntt_e_node9,
            Idntt_e_link: Idntt_e_node10
        });
    };

    const Idntt_e_node10Link = () => {
        setIdntt_e_node10({
            ...Idntt_e_node10,
            Idntt_e_link: Idntt_e_node11
        });
    };

    const Idntt_e_node11Link = () => {
        setIdntt_e_node11({
            ...Idntt_e_node11,
            Idntt_e_link: Idntt_e_node12
        });
    };

    const Idntt_e_node12Link = () => {
        setIdntt_e_node12({
            ...Idntt_e_node12,
            Idntt_e_link: Idntt_e_node13
        });
    };

    const Idntt_e_node13Link = () => {
        setIdntt_e_node13({
            ...Idntt_e_node13,
            Idntt_e_link: Idntt_e_node14
        });
    };

    const Idntt_e_node14Link = () => {
        setIdntt_e_node14({
            ...Idntt_e_node14,
            Idntt_e_link: Idntt_e_node15
        });
    };

    const Idntt_e_node15Link = () => {
        setIdntt_e_node15({
            ...Idntt_e_node15,
            Idntt_e_link: Idntt_e_node16
        });
    };

    const Idntt_e_node16Link = () => {
        setIdntt_e_node16({
            ...Idntt_e_node16,
            Idntt_e_link: Idntt_e_node17
        });
    };

    const Idntt_e_node17Link = () => {
        setIdntt_e_node17({
            ...Idntt_e_node17,
            Idntt_e_link: Idntt_e_node18
        });
    };

    const Idntt_e_node18Link = () => {
        setIdntt_e_node18({
            ...Idntt_e_node18,
            Idntt_e_link: Idntt_e_node19
        });
    };

    const Idntt_e_node19Link = () => {
        setIdntt_e_node19({
            ...Idntt_e_node19,
            Idntt_e_link: Idntt_e_node20
        });
    };

    const Idntt_e_node20Link = () => {
        setIdntt_e_node20({
            ...Idntt_e_node20,
            Idntt_e_link: Idntt_e_node21
        });
    };

    return (
        <div>
            <section>
                <p onClick={Idntt_e_node1Link}>{Idntt_e_node1.Idntt_e_mem_name}</p>
                {Idntt_e_node1.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node2Link}>{Idntt_e_node2.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node2.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node3Link}>{Idntt_e_node3.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node3.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node4Link}>{Idntt_e_node4.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node4.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node5Link}>{Idntt_e_node5.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node5.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node6Link}>{Idntt_e_node6.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node6.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node7Link}>{Idntt_e_node7.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node7.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node8Link}>{Idntt_e_node8.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node8.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node9Link}>{Idntt_e_node9.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node9.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node10Link}>{Idntt_e_node10.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node10.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node11Link}>{Idntt_e_node11.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node11.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node12Link}>{Idntt_e_node12.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node12.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node13Link}>{Idntt_e_node13.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node13.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node14Link}>{Idntt_e_node14.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node14.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node15Link}>{Idntt_e_node15.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node15.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node16Link}>{Idntt_e_node16.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node16.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node17Link}>{Idntt_e_node17.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node17.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node18Link}>{Idntt_e_node18.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node18.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node19Link}>{Idntt_e_node19.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node19.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node20Link}>{Idntt_e_node20.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node20.Idntt_e_link !== null && (
                    <p>{Idntt_e_node21.Idntt_e_mem_name}</p>
                )}
            </section>
        </div>
    );
}
