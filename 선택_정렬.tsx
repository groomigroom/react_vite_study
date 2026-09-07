import { useState } from "react";

export default function TriplesSunEventSuntekArray() {
    const [dataArray, setDataArray] = useState<number[]>([
        188, 162, 168, 120, 50, 150, 177, 105,
    ]);

    const sortDataArray = () => {
        // 원본 state를 직접 건드리지 않기 위해 복사본 생성
        const arr = [...dataArray];
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let k = i + 1; k < n; k++) {
                if (arr[minIdx] > arr[k]) {
                    minIdx = k;
                }
            }
            // swap
            const tmp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = tmp;
        }

        setDataArray(arr); // 정렬이 끝난 새 배열을 한 번에 반영
    };

    return (
        <div>
            <button onClick={sortDataArray}>정렬</button>
            <p>{dataArray.join(", ")}</p>
        </div>
    );
}
