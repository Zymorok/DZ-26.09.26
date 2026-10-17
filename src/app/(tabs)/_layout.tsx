import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Platform } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function TabsLayout() {

  const { colors } = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          height: Platform.OS === "ios" ? 88 : 68,
          paddingTop: 8,
          paddingBottom: Platform.OS === "ios" ? 28 : 10,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 8,
          shadowColor: colors.cardShadow,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }}
    >
      {/* Вкладка 1: Гра */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Гра",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-esports" size={size} color={color} />
          ),
        }}
      />

      {/* Вкладка 2: Статистика */}
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Статистика",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Історія",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}