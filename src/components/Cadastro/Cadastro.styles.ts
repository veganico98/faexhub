import styled from "styled-components"

//////////////////// Container/Card

export const CadastroContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8ecff;
    padding: 20px;
`;

export const CadastroCard = styled.div`
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 48px 40px;
    box-shadow: 0 20px 40px rbga(0, 0, 0, 0.08);
    width: 100%;
    max-width: 520px;
    @media (min-width: 1024px){
        max-width: 560px;
        padding: 52px 44px
    }
`;

export const Logo = styled.img`
    display: block;
    max-width: 180px;
    height: auto;
    margin: 0 auto 16px;  
    @media (min-width: 1024px){
        max-width: 200px;
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1.5px solid #e2e8f0;
    margin: 0 auto 24px;
    width: 60%;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e2533;
    margin-bottom: 24px;
    text-align: center;
    @media (min-width: 1024px){
        font-size: 1.6rem;
    }
`;

//////////////////// Stepper


export const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
`;

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const StepLine = styled.div`
    width: 100px;
    height: 2px;
    background-color: #c8cdd5;
    margin: 0 12px;
    margin-bottom: 28px;
    @media (min-width: 1024px){
        width: 140px;
    }
`;

interface StepCircleProps {
    $active: boolean;
    $completed: boolean;
}

export const StepCircle = styled.div<StepCircleProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;

    background: ${({ $active = false, $completed = false }) =>
        $active || $completed ? "#1e2533" : "#e2e8f0"};
    color: ${({ $active = false, $completed = false }) =>
        $active || $completed ? "#fff" : "#a0aec0"};
    border: 2px solid
        ${({ $active = false, $completed = false }) =>
        $active || $completed ? "#1e2533" : "#e2e8f0"};

    & svg {
        font-size: 20px;
    }
`;

interface StepLabelProps{
    $active: boolean;
}

export const StepLabel = styled.span<StepLabelProps>`
    font-size: 0.85rem;
    font-weight: ${(props) => (props.$active ? "600" : "400")};
    color: ${(props) => (props.$active ? "#1e2533" : "#a0aec0")};  
`;

//////////////////// Layout form

export const FormRow = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 480px){
        flex-direction: column;
        gap: 0;
    }
`;

interface FieldGroupProps{
    $flex?: number;
}

export const FieldGroup = styled.div<FieldGroupProps>`
    flex: ${(props) => props.$flex || 1};
    margin-bottom: 18px;
`;

export const FieldLabel = styled.label`
    display: block;
    font-size: 0%.85rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 6px;
`;

//////////////////// Inputs


