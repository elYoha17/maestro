export type Exercise = {
    id: number;
    start_date: string;
    fund: number;
    receivable: number;
    payable: number;
    created_at: string;
    updated_at: string;
};

export type ExerciseFormData = {
    start_date: string;
    fund: string;
    receivable: string;
    payable: string;
};
