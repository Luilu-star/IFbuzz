import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Delete, insert, select, Update } from "../../lib/crud";
import { supabase } from "../../lib/supabase";

export default function Teste() {
    const [data, setData] = useState<any[]>([]);

    async function login() {
        await supabase.auth.signInWithPassword({
            email: "luiotv2302@gmail.com",
            password: "Aline<3"
        });
    }

    async function fetchData() {
        try {
            const result = await select("usuarios", "*");
            if (result) {
                setData(result);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function init() {
            await login();
            await fetchData();
        }

        init();
    }, []);

    const handleInsert = async () => {
        await insert("usuarios", {
            nome: "John Doe",
            email: "johndoe@example.com",
            senha: "password",
            cpf: "12345678900",
            dt_nasc: new Date()
        });
        await fetchData();
    };

    const handleDeleteLast = async () => {
        if (data.length === 0) return;
        await Delete("usuarios", { id: data[data.length - 1].id });
        await fetchData();
    };

    const handleUpdate = async () => {
        if (data.length === 0) return;
        const lastUser = data[data.length - 1];
        await Update("usuarios", { id: lastUser.id }, { nome: "Jane Doe" });
        await fetchData();
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
            {data.length ? (
                data.map((item) => (
                    <View key={item.id} style={{ marginBottom: 10 }}>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Email: {item.email}</Text>
                    </View>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
            <Button title="Insert" onPress={handleInsert} />
            <Button title="Delete last" onPress={handleDeleteLast} />
            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
}

