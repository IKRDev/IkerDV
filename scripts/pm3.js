// --------- START OF FILE AT LINE 6051 ---------

block_data = `1) Block ID
2) Block Name
3) Solid for walking (Y=Yes / N=No / P=Platform=Can be stood on)
4) Hardness (0=not diggable / >0 hardness ratio / -1=instant dig)
5) Digging Tool (N=None / S=Spade / A=Axe / P=PickAxe / H=sHears / W=sWord / F=Flint and Steel)
6) Liquid Height (0 to 9)
7) Flow Direction (N=Nope / .=Source Block / L=Left / R=Right / D=Down)
8) Can Fall (N=No / Y=Yes / X=Can't exist floating / W=Must be near wood / L=Attached left / R=Attached right)
9) Light Absorption (0=Light passes straight through / 16=Complete absorption of light / negative=illuminosity)
10) Tile Group (1=Tool / 0=Unplaceable / 8=Unstackable Large / -1=Food / 10=Wood / 11=Door / 12=Spawn Egg / 13=Helmet / 14=Chestplate / 15=Leggings / 16=Boots / 20=Redstone hand or external / 22=Switch? / 30=Stair Left / 31=Stair Right)
11) Harvest Block (0=Self / >1=Tile number / -1=Nothing / -more=1/15 of positive version of tile
12) Smelt into Block ID (0=Nothing / >1=Tile number)
13) Burn in furnace duration (In seconds / 0=no burn)
14) Damage inflicted (0=None / 1=Hand Damage / 12=TNT explosion)
15) Creative Mode (1=Building blocks / 2=Decoration blocks / 3=Redstone / 4=Miscellaneous / 5=Foodstuffs / 6=Tools / 7=Combat / 8=Materials / -1=N/A)
16) Tile Sprite ID
17) Inventory Sprite ID
18) Item Durability
19) Root Item ID ('the same as' for crafting etc...)
20) Activate on load (N=nope / G=Grow / A=Activate / B=Burn (furnace) / R=Redstone)

1
Air
N
0
N
0
N
N
0
0
-1
0
0
0
-1
1
1
0
1
N

2
Grass
Y
0.5
S
0
N
N
4
3
3
0
0
0
1
2
2
0
2
N

3
Dirt
Y
0.5
S
0
N
N
4
3
0
0
0
0
1
3
3
0
3
N

4
Stone
Y
1.5
P1
0
N
N
16
5
41
0
0
0
1
4
4
0
4
N

5
Gravel
Y
0.6
S
0
N
Y
6
3
0
0
0
0
1
5
5
0
5
N

6
Bedrock
Y
99999
P
0
N
N
16
0
0
0
0
0
-1
6
6
0
6
N

7
Sand
Y
0.5
S
0
N
Y
4
3
0
42
0
0
1
7
7
0
7
N

8
Wood
P
2
A
0
N
N
4
10
0
94
15
0
1
8
8
0
8
N

9
Leaves
P
0.2
W
0
N
W
0
6
-55
0
3
0
2
9
9
0
9
N

10
Leaves
P
0.2
W
0
N
W
0
6
-55
0
1
0
2
269
10
0
9
N

11
Cactus
P
0.4
N
0
N
X
1
6
0
0
0
0
2
280
98
0
11
G

12
Chest
P
2.5
A
0
N
N
1
8
0
94
15
0
2
12
12
0
12
N

13
Coal Ore
Y
3
P1
0
N
N
16
2
90
0
0
0
1
13
13
0
13
N

14
Diamond Ore
Y
3
P3
0
N
N
16
2
89
0
0
0
1
14
14
0
14
N

15
Gold Ore
Y
3
P3
0
N
N
16
2
0
84
0
0
1
15
15
0
15
N

16
Iron Ore
Y
3
P2
0
N
N
16
2
0
91
0
0
1
16
16
0
16
N

17
Brick
Y
2
P
0
N
N
16
5
0
0
0
0
1
17
17
0
17
N

18
TNT
Y
0.1
N
0
N
N
1
20
0
0
0
24
3
18
18
0
18
N

19
Ladder
N
-1
N
0
N
N
0
7
0
0
5
0
2
270
19
0
19
N

20
Torch
N
-1
N
0
N
X
-14
2
0
0
0
0
2
95
95
0
20
N

21
Flowing Water
N
0
N
1
L
N
1
0
0
0
0
0
-1
197
197
0
21
N

22
Flowing Water
N
0
N
2
L
N
1
0
0
0
0
0
-1
198
198
0
22
N

23
Flowing Water
N
0
N
3
L
N
1
0
0
0
0
0
-1
199
199
0
23
N

24
Flowing Water
N
0
N
4
L
N
1
0
0
0
0
0
-1
200
200
0
24
N

25
Flowing Water
N
0
N
5
L
N
1
0
0
0
0
0
-1
201
201
0
25
N

26
Flowing Water
N
0
N
6
L
N
1
0
0
0
0
0
-1
202
202
0
26
N

27
Flowing Water
N
0
N
7
L
N
1
0
0
0
0
0
-1
203
203
0
27
N

28
Flowing Water
N
0
N
8
L
N
1
0
0
0
0
0
-1
204
204
0
28
N

29
Flowing Water
N
0
N
1
R
N
1
0
0
0
0
0
-1
205
205
0
29
N

30
Flowing Water
N
0
N
2
R
N
1
0
0
0
0
0
-1
206
206
0
30
N

31
Flowing Water
N
0
N
3
R
N
1
0
0
0
0
0
-1
207
207
0
31
N

32
Flowing Water
N
0
N
4
R
N
1
0
0
0
0
0
-1
208
208
0
32
N

33
Flowing Water
N
0
N
5
R
N
1
0
0
0
0
0
-1
209
209
0
33
N

34
Flowing Water
N
0
N
6
R
N
1
0
0
0
0
0
-1
210
210
0
34
N

35
Flowing Water
N
0
N
7
R
N
1
0
0
0
0
0
-1
211
211
0
35
N

36
Flowing Water
N
0
N
8
R
N
1
0
0
0
0
0
-1
212
212
0
36
N

37
Falling Water
N
0
N
9
D
N
1
0
0
0
0
0
-1
20
20
0
37
N

38
Water
N
0
N
9
.
N
1
9
0
0
0
0
-1
20
20
0
38
N

39
Diamond Pickaxe
N
0
P4
0
N
N
0
1
0
0
0
5
6
78
78
1562
39
N

40
Dark Sky
N
0
N
0
N
N
0
0
0
0
0
0
-1
22
22
0
40
N

41
Cobblestone
Y
2
P1
0
N
N
16
5
0
4
0
0
1
23
23
0
4
N

42
Glass
Y
0.3
N
0
N
N
0
7
-1
0
0
0
1
281
99
0
42
N

43
Rose
N
-1
N
0
N
X
0
6
0
0
1
0
2
282
100
0
43
N

44
Flower
N
-1
N
0
N
X
0
6
0
0
1
0
2
284
102
0
44
N

45
Mushroom (red)
N
-1
N
0
N
X
0
6
0
0
1
0
2
285
103
0
45
N

46
Mushroom (brown)
N
-1
N
0
N
X
0
6
0
0
1
0
2
283
101
0
45
N

47
Crafting Table
P
2.5
A
0
N
N
1
8
0
94
15
0
2
24
24
0
47
N

48
Furnace
P
3.5
P
0
N
N
1
8
0
0
0
0
2
25
25
0
48
N

49
Furnace
P
3.5
P
0
N
N
-13
0
48
0
0
0
-1
26
26
0
48
B

50
Bed
N
-1
N
0
N
X
0
8
124
0
0
0
-1
27
27
0
50
N

51
Bed
N
-1
N
0
N
X
0
8
-1
0
0
0
-1
28
28
0
50
N

52
Obsidian
Y
50
P4
0
N
N
16
5
0
0
0
0
1
29
29
0
52
N

53
Clay
Y
0.6
S
0
N
N
16
3
0
17
0
0
1
30
30
0
53
N

54
Pumpkin
P
1
A
0
N
N
1
13
0
0
0
0
1
31
31
0
54
N

55
Sapling
N
-1
N
0
N
X
0
6
0
0
5
0
2
271
105
0
55
N

56
Wooden Door
N
3
A
0
N
X
1
11
118
0
20
0
-1
32
32
0
118
N

57
Wooden Door
N
3
A
0
N
X
1
11
-1
0
20
0
-1
33
33
0
118
N

58
Sandstone
Y
0.8
P
0
N
N
16
5
0
0
0
0
1
34
34
0
58
N

59
Wood Planks
Y
2
A
0
N
N
8
4
0
94
15
0
1
35
35
0
59
N

60
Stone Brick
Y
1.5
P
0
N
N
16
5
0
0
0
0
1
36
36
0
60
N

61
Sugar Cane
N
0.4
N
0
N
X
0 
6
0
0
0
0
8
286
104
0
61
G

62
Diamond Shovel
N
0
S4
0
N
N
0
1
0
0
0
4
6
83
83
1562
62
N

63
Diamond Axe
N
0
A4
0
N
N
0
1
0
0
0
6
6
290
88
1562
63
N

64
Flowing Lava
N
0
N
1
L
N
-15
0
0
0
0
4
-1
213
213
0
64
N

65
Flowing Lava
N
0
N
2
L
N
-15
0
0
0
0
4
-1
214
214
0
65
N

66
Flowing Lava
N
0
N
3
L
N
-15
0
0
0
0
4
-1
215
215
0
66
N

67
Flowing Lava
N
0
N
4
L
N
-15
0
0
0
0
4
-1
216
216
0
67
N

68
Flowing Lava
N
0
N
5
L
N
-15
0
0
0
0
4
-1
217
217
0
68
N

69
Flowing Lava
N
0
N
6
L
N
-15
0
0
0
0
4
-1
218
218
0
69
N

70
Flowing Lava
N
0
N
7
L
N
-15
0
0
0
0
4
-1
219
219
0
70
N

71
Flowing Lava
N
0
N
8
L
N
-15
0
0
0
0
4
-1
220
220
0
71
N

72
Flowing Lava
N
0
N
1
R
N
-15
0
0
0
0
4
-1
221
221
0
72
N

73
Flowing Lava
N
0
N
2
R
N
-15
0
0
0
0
4
-1
222
222
0
73
N

74
Flowing Lava
N
0
N
3
R
N
-15
0
0
0
0
4
-1
223
223
0
74
N

75
Flowing Lava
N
0
N
4
R
N
-15
0
0
0
0
4
-1
224
224
0
75
N

76
Flowing Lava
N
0
N
5
R
N
-15
0
0
0
0
4
-1
225
225
0
76
N

77
Flowing Lava
N
0
N
6
R
N
-15
0
0
0
0
4
-1
226
226
0
77
N

78
Flowing Lava
N
0
N
7
R
N
-15
0
0
0
0
4
-1
227
227
0
78
N

79
Flowing Lava
N
0
N
8
R
N
-15
0
0
0
0
4
-1
228
228
0
79
N

80
Falling Lava
N
0
N
9
D
N
-15
0
0
0
0
4
-1
39
39
0
80
N

81
Lava
N
0
N
9
.
N
-15
9
0
0
0
4
-1
39
39
0
81
N

82
Lava Bucket
N
0
N
0
N
N
0
8
0
0
1000
0
4
40
40
0
82
N

83
Stone Axe
N
0
A2
0
N
N
0
1
0
0
0
4
6
288
86
132
83
N

84
Gold Ingot
N
0
N
0
N
N
0
0
0
0
0
0
8
42
42
0
84
N

85
Wooden Axe
N
0
A1
0
N
N
0
1
0
94
10
3
6
287
85
60
85
N

86
Stone Pickaxe
N
0
P2
0
N
N
0
1
0
0
0
3
6
76
76
132
86
N

87
Iron Shovel
N
0
S3
0
N
N
0
1
0
0
0
2
6
82
82
251
87
N

88
Iron Pickaxe
N
0
P3
0
N
N
0
1
0
0
0
3
6
77
77
251
88
N

89
Diamond
N
0
N
0
N
N
0
0
0
0
0
0
8
46
46
0
89
N

90
Coal
N
0
N
0
N
N
0
0
0
0
80
0
8
47
47
0
90
N

91
Iron Ingot
N
0
N
0
N
N
0
0
0
0
0
0
8
48
48
0
91
N

92
Bucket
N
0
N
0
N
N
0
8
0
0
0
0
4
49
49
0
92
N

93
Iron Axe
N
0
A3
0
N
N
0
1
0
0
0
5
6
289
87
251
93
N

94
Charcoal
N
0
N
0
N
N
0
0
0
0
80
0
8
50
50
0
94
N

95
Water Bucket
N
0
N
0
N
N
0
8
0
0
0
0
4
51
51
0
95
N

96
Stick
N
0
N
0
N
N
0
0
0
94
5
0
8
52
52
0
96
N

97
Wooden Shovel
N
0
S1
0
N
N
0
1
0
94
10
1
6
80
80
60
97
N

98
Stone Shovel
N
0
S2
0
N
N
0
1
0
0
0
2
6
81
81
132
98
N

99
Wood Pickaxe
N
0
P1
0
N
N
0
1
0
94
10
2
6
75
75
60
99
N

100
Leaves / Wood
P
0.2
W
0
N
N
4
10
-1
0
15
0
-1
9
9
0
100
N

101
Flint
N
0
N
0
N
N
0
0
0
0
80
0
8
57
57
0
101
N

102
Gold Pickaxe
N
0
P5
0
N
N
0
1
0
0
0
2
6
79
79
30
102
N

103
Gold Shovel
N
0
S5
0
N
N
0
1
0
0
0
1
6
84
84
30
103
N

104
Gold Axe
N
0
A5
0
N
N
0
1
0
0
0
3
6
291
89
30
104
N

105
Wooden Sword
N
0
W1
0
N
N
0
1
0
0
0
4
7
90
90
60
105
N

106
Stone Sword
N
0
W2
0
N
N
0
1
0
0
0
5
7
91
91
132
106
N

107
Iron Sword
N
0
W3
0
N
N
0
1
0
0
0
6
7
92
92
251
107
N

108
Diamond Sword
N
0
W4
0
N
N
0
1
0
0
0
7
7
93
93
1562
108
N

109
Gold Sword
N
0
W5
0
N
N
0
1
0
0
0
4
7
94
94
30
109
N

110
Flint and Steel
N
0
F5
0
N
N
0
1
0
0
0
0
6
60
60
65
110
N

111
Cake
N
-1
N
0
N
X
0
4
0
0
0
0
5
61
96
0
111
N

112
Apple
N
0
N
0
N
N
0
-1
0
0
0
0
5
62
62
0
112
N

113
Raw Pork
N
0
N
0
N
N
0
-1
0
114
0
0
5
63
63
0
113
N

114
Cooked Pork
N
0
N
0
N
N
0
-1
0
0
0
0
5
64
64
0
114
N

115
Apple (in tree)
P
0.2
H
0
N
W
0
6
112
0
3
0
-1
65
65
0
9
N

116
TNT (flash)
Y
0.1
N
0
N
N
1
10
18
0
0
24
-1
66
66
0
116
N

117
Sign
N
1
A
0
N
X
0
4
0
94
15
0
2
279
97
0
117
N

118
Wooden Door
N
3
A
0
N
N
2
8
0
94
15
0
3
67
67
0
118
N

119
Rotten Flesh
N
0
N
0
N
N
0
-1
0
0
0
0
5
68
68
0
119
N

120
Wooden Door (Closed)
Y
3
A
0
N
X
2
11
118
0
15
0
-1
69
69
0
118
N

121
Wooden Door (Closed)
Y
3
A
0
N
X
8
11
-1
0
15
0
-1
70
70
0
118
N

122
Wool
Y
0.1
N
0
N
N
4
6
0
0
1
0
1
71
71
0
122
N

123
Jack o'lanterns
P
1
A
0
N
N
-15
6
0
0
0
0
1
72
72
0
123
N

124
Bed
N
-1
N
0
N
X
0
8
0
0
0
0
2
73
73
0
124
N

125
Gunpowder
N
0
N
0
N
N
0
0
0
0
0
0
8
74
74
0
125
N

126
Spawn Sheep
N
0
N
0
N
N
0
12
2
0
0
0
4
106
106
0
126
G

127
Spawn Pig
N
0
N
0
N
N
0
12
1
0
0
0
4
107
107
0
127
G

128
Spawn Zombie
N
0
N
0
N
N
0
12
100
0
0
0
4
108
108
0
128
G

129
Spawn Creeper
N
0
N
0
N
N
0
12
101
0
0
0
4
109
109
0
129
G

130
Bow
N
0
B3
0
N
N
0
1
0
0
0
0
7
110
110
385
130
N

131
Arrow
N
0
N
0
N
N
0
0
0
0
0
0
7
114
114
0
131
N

132
Arrow (in flight)
N
0
N
0
N
N
0
0
0
0
0
0
-1
114
114
0
132
N

133
Tall Grass
N
-1
N
0
N
X
0
6
142
0
1
0
2
275
43
0
133
N

134
Wheat (grow stage 1)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
115
115
0
134
G

135
Wheat (grow stage 2)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
116
116
0
134
G

136
Wheat (grow stage 3)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
117
117
0
134
G

137
Wheat (grow stage 4)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
118
118
0
134
G

138
Wheat (grow stage 5)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
119
119
0
134
G

139
Wheat (grow stage 6)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
120
120
0
134
G

140
Wheat (grow stage 7)
N
-1
N
0
N
X
0
6
142
0
1
0
-1
121
121
0
134
G

141
Wheat (fully grown)
N
-1
N
0
N
X
0
6
143
0
1
0
-1
122
122
0
141
N

142
Wheat Seeds
N
0
N
0
N
N
0
-1
0
0
0
0
8
123
123
0
142
N

143
Harvested Wheat
N
0
N
0
N
N
0
-1
0
0
0
0
8
124
124
0
143
N

144
Farmland
Y
0.5
S
0
N
N
4
3
3
0
0
0
-1
125
125
0
144
N

145
Wooden Hoe
N
0
H1
0
N
N
0
1
0
0
0
4
6
126
126
60
145
N

146
Stone Hoe
N
0
H2
0
N
N
0
1
0
0
0
5
6
127
127
132
146
N

147
Iron Hoe
N
0
H3
0
N
N
0
1
0
0
0
6
6
128
128
251
147
N

148
Diamond Hoe
N
0
H4
0
N
N
0
1
0
0
0
7
6
129
129
1562
148
N

149
Gold Hoe
N
0
H5
0
N
N
0
1
0
0
0
4
6
130
130
30
149
N

150
Leather Helmet
N
0
N
0
N
N
0
0
0
0
0
-1
0
2
131
56
150
N

151
Iron Helmet
N
0
N
0
N
N
0
13
0
0
0
-2
7
2
131
166
151
N

152
Gold Helmet
N
0
N
0
N
N
0
13
0
0
0
-2
7
4
132
78
152
N

153
Diamond Helmet
N
0
N
0
N
N
0
13
0
0
0
-3
7
6
133
364
153
N

154
Leather Chestplate
N
0
N
0
N
N
0
0
0
0
-3
0
0
2
134
81
154
N

155
Iron Chestplate
N
0
N
0
N
N
0
14
0
0
0
-6
7
1
134
241
155
N

156
Gold Chestplate
N
0
N
0
N
N
0
14
0
0
0
-5
7
2
135
113
156
N

157
Diamond Chestplate
N
0
N
0
N
N
0
14
0
0
0
-8
7
3
136
529
157
N

158
Leather Leggings
N
0
N
0
N
N
0
0
0
0
0
-3
0
0
137
76
158
N

159
Iron Leggings
N
0
N
0
N
N
0
15
0
0
0
-7
7
1
137
226
159
N

160
Gold Leggings
N
0
N
0
N
N
0
15
0
0
0
-4
7
2
138
106
160
N

161
Diamond Leggings
N
0
N
0
N
N
0
15
0
0
0
-9
7
3
139
430
161
N

162
Bread
N
0
N
0
N
N
0
-1
0
0
0
0
5
140
140
0
162
N

163
Leather
N
0
N
0
N
N
0
-1
0
0
0
0
8
141
141
0
163
N

164
Raw Chicken
N
0
N
0
N
N
0
-1
0
165
0
0
5
142
142
0
164
N

165
Cooked Chicken
N
0
N
0
N
N
0
-1
0
0
0
0
5
143
143
0
165
N

166
Egg
N
0
N
0
N
N
0
0
0
0
0
0
8
144
144
0
166
N

167
Feather
N
0
N
0
N
N
0
0
0
0
0
0
8
145
145
0
167
N

168
Milk
N
0
N
0
N
N
0
0
0
0
0
0
4
146
146
0
168
N

169
Sugar
N
0
N
0
N
N
0
0
0
0
0
0
8
147
147
0
169
N

170
String
N
0
N
0
N
N
0
0
0
0
0
0
8
148
148
0
170
N

171
Raw Beef
N
0
N
0
N
N
0
-1
0
172
0
0
5
149
149
0
171
N

172
Steak
N
0
N
0
N
N
0
-1
0
0
0
0
5
150
150
0
172
N

173
Spawn Chicken
N
0
N
0
N
N
0
12
4
0
0
0
4
151
151
0
173
N

174
Spawn Cow
N
0
N
0
N
N
0
12
3
0
0
0
4
152
152
0
174
N

175
Spruce Sapling
N
-1
N
0
N
X
0
6
0
0
5
0
2
272
21
0
55
G

176
Birch Sapling
N
-1
N
0
N
X
0
6
0
0
5
0
2
273
37
0
55
G

177
Jungle Sapling
N
-1
N
0
N
X
0
6
0
0
5
0
2
274
38
0
55
G

178
Spruce Wood
P
2
A
0
N
N
4
10
0
94
15
0
1
41
41
0
178
N

179
Birch Wood
P
2
A
0
N
N
4
10
0
94
15
0
1
44
44
0
179
N

180
Jungle Wood
P
2
A
0
N
N
4
10
0
94
15
0
1
45
45
0
180
N

181
Leaves Birch
P
0.2
W
0
N
W
0
6
-176
0
3
0
2
53
53
0
9
N

182
Leaves Birch
P
0.2
W
0
N
W
0
6
-176
0
1
0
2
276
54
0
9
N

183
Leaves Birch (wood)
P
0.2
W
0
N
W
4
10
-176
0
15
0
-1
53
53
0
100
N

184
Leaves Spruce
P
0.2
W
0
N
W
0
6
-175
0
3
0
2
55
55
0
9
N

185
Leaves Spruce
P
0.2
W
0
N
W
0
6
-175
0
1
0
2
277
56
0
9
N

186
Leaves Spruce (wood)
P
0.2
W
0
N
W
4
10
-175
0
15
0
-1
55
55
0
100
N

187
Leaves Jungle
P
0.2
W
0
N
W
0
6
-177
0
3
0
2
58
58
0
9
N

188
Leaves Jungle
P
0.2
W
0
N
W
0
6
-177
0
1
0
2
278
59
0
9
N

189
Leaves Jungle (wood)
P
0.2
W
0
N
W
4
10
-177
0
15
0
-1
58
58
0
100
N

190
Piston (Up)
Y
1.5
P1
0
N
N
16
20
0
0
0
0
3
153
153
0
190
N

191
Piston (Up - Extended Base)
Y
1.5
P1
0
N
N
16
20
190
0
0
0
-1
154
154
0
190
N

192
Piston (Up - Extended Piston)
Y
1.5
P1
0
N
X
1
20
-1
0
0
0
-1
155
155
0
190
N

193
Pressure Plate
N
-1
N
0
N
X
0
22
0
0
0
0
3
156
156
0
193
N

194
Bone
N
0
N
0
N
N
0
0
0
0
0
0
4
157
157
0
194
N

195
Bonemeal
N
0
N
0
N
N
0
0
0
0
0
0
4
158
158
0
195
N

196
Spawn Spider
N
0
N
0
N
N
0
12
102
0
0
0
4
159
159
0
196
G

197
Spawn Skeleton
N
0
N
0
N
N
0
12
103
0
0
0
4
160
160
0
197
G

198
Repeater
N
-1
N
0
N
X
0
20
0
0
0
0
3
161
161
0
198
N

199
Repeater On
N
-1
N
0
N
X
0
20
198
0
0
0
-1
162
162
0
199
R

200
Repeater 2
N
-1
N
0
N
X
0
20
198
0
0
0
-1
163
163
0
200
N

201
Repeater 2 On
N
-1
N
0
N
X
0
20
198
0
0
0
-1
164
164
0
201
R

202
Repeater 3
N
-1
N
0
N
X
0
20
198
0
0
0
-1
165
165
0
202
N

203
Repeater 3 On
N
-1
N
0
N
X
0
20
198
0
0
0
-1
166
166
0
203
R

204
Repeater 4
N
-1
N
0
N
X
0
20
198
0
0
0
-1
167
167
0
204
N

205
Repeater 4 On
N
-1
N
0
N
X
0
20
198
0
0
0
-1
168
168
0
205
R

206
Piston (Down)
Y
1.5
P1
0
N
N
16
20
190
0
0
0
-1
169
169
0
190
N

207
Piston (Down - Extended Base)
Y
1.5
P1
0
N
N
16
20
190
0
0
0
-1
170
170
0
190
N

208
Piston (Down - Extended Piston)
Y
1.5
P1
0
N
X
1
20
-1
0
0
0
-1
171
171
0
190
N

209
Repeater (N)
N
-1
N
0
N
X
0
20
211
0
0
0
-1
172
172
0
209
N

210
Repeater (N) On
N
-1
N
0
N
X
0
20
211
0
0
0
-1
173
173
0
210
R

211
Long Range Repeater
N
-1
N
0
N
X
0
20
-1
0
0
0
3
174
174
0
211
N

212
Repeater (E) On
N
-1
N
0
N
X
0
20
211
0
0
0
-1
175
175
0
212
R

213
Repeater (S)
N
-1
N
0
N
X
0
20
211
0
0
0
-1
176
176
0
213
N

214
Repeater (S) On
N
-1
N
0
N
X
0
20
211
0
0
0
-1
177
177
0
214
R

215
Repeater (W)
N
-1
N
0
N
X
0
20
211
0
0
0
-1
178
178
0
215
N

216
Repeater (W) On
N
-1
N
0
N
X
0
20
211
0
0
0
-1
179
179
0
216
R

217
Redstone Ore
Y
3
P3
0
N
N
16
2
218
0
0
0
1
180
180
0
217
N

218
Redstone Dust
N
0
N
0
N
N
0
0
0
0
0
0
3
181
181
0
218
N

219
Iron Door
N
3
P2
0
N
N
2
8
0
94
0
0
3
182
182
0
219
N

220
Iron Door (Top)
N
5
P2
0
N
X
1
11
219
0
0
0
-1
183
183
0
219
N

221
Iron Door (Bottom)
N
5
P2
0
N
X
1
11
-1
0
0
0
-1
184
184
0
219
N

222
Iron Door (Top Closed)
Y
5
P2
0
N
X
2
11
219
0
0
0
-1
185
185
0
219
N

223
Iron Door (Bottom Closed)
Y
5
P2
0
N
X
16
11
-1
0
0
0
-1
186
186
0
219
N

224
Fire
N
-1
N
0
N
X
-14
6
-1
0
0
1
-1
187
187
0
224
F

225
Fire 2
N
-1
N
0
N
X
-14
6
-1
0
0
1
-1
188
188
0
224
F

226
Fire 3
N
-1
N
0
N
X
-14
6
-1
0
0
1
-1
189
189
0
224
F

227
Piston (East)
Y
1.5
P1
0
N
N
16
20
0
0
0
0
-1
190
190
0
190
N

228
Piston (East - Extended Base)
Y
1.5
P1
0
N
N
16
20
190
0
0
0
-1
191
191
0
190
N

229
Piston (East - Extended Piston)
Y
1.5
P1
0
N
X
1
20
-1
0
0
0
-1
192
192
0
190
N

230
Piston (West)
Y
1.5
P1
0
N
N
16
20
0
0
0
0
-1
193
193
0
190
N

231
Piston (West - Extended Base)
Y
1.5
P1
0
N
N
16
20
190
0
0
0
-1
194
194
0
190
N

232
Piston (West - Extended Piston)
Y
1.5
P1
0
N
X
1
20
-1
0
0
0
-1
195
195
0
190
N

233
Pressure Stone
Y
1.5
P1
0
N
N
16
22
41
0
0
0
3
196
196
0
233
N

234
Wood Planks (Spruce)
Y
2
A
0
N
N
8
4
0
94
15
0
1
229
229
0
59
N

235
Wood Planks (Jungle)
Y
2
A
0
N
N
8
4
0
94
15
0
1
230
230
0
59
N

236
Wood Planks (Birch)
Y
2
A
0
N
N
8
4
0
94
15
0
1
231
231
0
59
N

237
Stone Stair
Y
2
P1
0
N
N
4
30
0
0
0
0
1
232
303
0
237
N

238
Stone Stair (right)
Y
2
P1
0
N
N
4
31
237
0
0
0
-1
233
233
0
237
N

239
Wood Stair
Y
3
A
0
N
N
4
30
0
94
15
0
1
234
304
0
239
N

240
Wood Stair (right)
Y
3
A
0
N
N
4
31
239
94
15
0
-1
235
235
0
239
N

241
Stone Stair
Y
2
P1
0
N
N
4
30
0
0
0
0
1
236
305
0
241
N

242
Stone Stair (right)
Y
2
P1
0
N
N
4
31
241
0
0
0
-1
237
237
0
242
N

243
Fence
P
2.5
A
0
N
N
0
7
0
94
10
0
2
238
306
0
243
N

244
Torch (left)
N
-1
N
0
N
L
-14
2
20
0
0
0
-1
239
239
0
20
N

245
Torch (right)
N
-1
N
0
N
R
-14
2
20
0
0
0
-1
240
240
0
20
N

246
Web
N
-1
N
0
N
N
0
6
170
0
1
0
2
241
241
0
246
N

247
Block of Iron
Y
5
P2
0
N
N
16
2
0
0
0
0
1
242
242
0
247
N

248
Block of Gold
Y
3
P3
0
N
N
16
2
0
0
0
0
1
243
243
0
248
N

249
Block of Diamond
Y
5
P3
0
N
N
16
2
0
0
0
0
1
244
244
0
249
N

250
Block of Redstone
Y
5
P1
0
N
N
16
20
0
0
0
0
3
245
245
0
250
N

251
Block of Redstone (Active)
Y
5
P1
0
N
N
-4
20
11
0
0
0
-1
246
246
0
250
R

252
Red Mushroom Flesh
Y
1
A
0
N
N
4
9
0
0
0
0
-1
247
247
0
252
N

253
Mushroom Stalk
P
1
A
0
N
N
4
9
0
0
0
0
-1
248
248
0
253
N

254
Brown Mushroom Flesh
Y
1
A
0
N
N
4
9
0
0
0
0
-1
249
249
0
254
N

255
Glowstone
Y
1.5
P1
0
N
N
-15
5
255
0
0
0
1
250
250
0
255
N

256
Netherrack
Y
1.5
P1
0
N
N
16
5
0
0
0
0
1
251
251
0
256
N

257
Soul Sand
Y
1.5
S
0
N
N
6
5
0
0
0
0
1
252
252
0
256
N

258
Lever
N
-1
N
0
N
X
0
22
0
0
0
0
3
253
253
0
258
N

259
Lever (On)
N
-1
N
0
N
X
0
22
258
0
0
0
-1
254
254
0
258
R

260
Lever (W)
N
-1
N
0
N
L
0
22
258
0
0
0
-1
255
255
0
258
N

261
Lever (W On)
N
-1
N
0
N
L
0
22
258
0
0
0
-1
256
256
0
258
R

262
Lever (E)
N
-1
N
0
N
R
0
22
258
0
0
0
-1
257
257
0
258
N

263
Lever (E On)
N
-1
N
0
N
R
0
22
258
0
0
0
-1
258
258
0
258
R

264
Trapdoor
Y
2
A
0
N
N
0
20
0
94
15
0
3
260
259
0
264
N

265
Trapdoor (Open)
N
2
A
0
N
N
0
20
264
94
15
0
-1
261
261
0
264
N

266
Nether Portal
N
0
N
0
N
X
-8
0
-1
0
1
0
-1
262
262
0
266
N

267
Obsidian (Portal)
P
50
P4
0
N
N
0
5
52
0
0
0
-1
29
29
0
52
N

268
Bedrock
Y
9999
P
0
N
N
16
2
0
0
0
0
1
6
6
0
268
N

269
Gold Crown
N
0
N
0
N
N
0
13
0
0
0
-2
-1
10
263
78
263
N

270
Moss Stone
Y
2
P1
0
N
N
16
5
0
4
0
0
1
264
264
0
4
N

271
Emerald Ore
Y
3
P3
0
N
N
16
2
272
0
0
0
1
265
265
0
271
N

272
Emerald
N
0
N
0
N
N
0
0
0
0
0
0
8
266
266
0
272
N

273
Block of Emerald
Y
5
P3
0
N
N
16
2
0
0
0
0
1
267
267
0
273
N

274
Spawn Wolf
N
0
N
0
N
N
0
12
5
0
0
0
4
268
268
0
274
G

275
Spawn Village House
N
0
N
0
N
N
0
12
-1
0
0
0
4
292
292
0
275
G

276
Spawn Village Farm House
N
0
N
0
N
N
0
12
-2
0
0
0
4
292
292
0
275
G

277
Spawn Village Blacksmiths
N
0
N
0
N
N
0
12
-3
0
0
0
4
292
292
0
275
G

278
Fence Post
P
2.5
A
0
N
N
0
7
0
94
10
0
-1
293
293
0
243
N

279
Spawn Village Well
N
0
N
0
N
N
0
12
-4
0
0
0
4
292
292
0
275
G

280
Spawn Zombie Pigman
N
0
N
0
N
N
0
12
106
0
0
0
4
294
294
0
280
G

281
Spawn Villager
N
0
N
0
N
N
0
12
7
0
0
0
4
295
295
0
281
G

282
Spawn Enderman
N
0
N
0
N
N
0
12
107
0
0
0
4
296
296
0
282
G

283
Snow Layer
N
-1
S1
0
N
X
1
7
286
0
0
0
2
297
300
0
283
N

284
Snowy Grass
Y
0.5
S1
0
N
N
4
3
3
0
0
0
-1
298
298
0
2
N

285
Snow
Y
0.2
S1
0
N
N
4
3
286
0
0
0
1
299
299
0
299
N

286
Snowball
N
0
N
0
N
N
0
0
0
0
0
0
8
301
301
0
286
N

287
Ice
Y
0.5
P
0
N
N
1
3
-1
0
0
0
1
302
302
0
287
N
`


// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function generateTooltip(hovertext, tooltiptext) {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerHTML = hovertext;
    tooltip.dataset.text = tooltiptext;
    return tooltip;
}

let bID = 287;
let cID = 302;
let bid,
    bn,
    bs,
    bh,
    bd,
    bds,
    blh,
    bfd,
    bg,
    bla,
    btg,
    bhg,
    bsb,
    bbd,
    bdam,
    bct,
    btsid,
    bisid,
    bdur,
    briid,
    baol;

function createBlock() {
    const cont = document.createElement("div");
    cont.className = "block-div";

    bID += 1;
    cID += 1;

    /*
  const BlockProps = document.createElement("h2");
  BlockProps.innerHTML = "Tile Properties";
  cont.appendChild(BlockProps);
  */

    // ---- BLOCK ID ----

    // Create block id input element
    const blockId = document.createElement("input");
    blockId.id = "block-id";
    blockId.type = "number";
    blockId.min = bID;
    blockId.value = bID;
    cont.appendChild(blockId);

    // block id label
    const blockIdL = document.createElement("label");
    blockIdL.for = "block-id";
    blockIdL.innerHTML = "Block ID";
    cont.appendChild(blockIdL);

    cont.appendChild(document.createElement("br"));

    // ---- Block Name ----

    // Create block name input element
    const blockName = document.createElement("input");
    blockName.id = "block-name";
    blockName.type = "text";
    cont.appendChild(blockName);

    // block name label
    const blockNameL = document.createElement("label");
    blockNameL.for = "block-name";
    blockNameL.innerHTML = "Block Name";
    cont.appendChild(blockNameL);

    cont.appendChild(document.createElement("br"));

    // ---- Solidity ----

    // Create solid input element
    const solid = document.createElement("select");
    solid.id = "solidity";
    solid.name = "solidity";

    // create options
    let yes = document.createElement("option");
    yes.value = "Y";
    yes.innerHTML = "Yes";
    solid.appendChild(yes);

    let no = document.createElement("option");
    no.value = "N";
    no.innerHTML = "No";
    solid.appendChild(no);

    let plat = document.createElement("option");
    plat.value = "P";
    plat.innerHTML = "Platform";
    solid.appendChild(plat);

    cont.appendChild(solid);

    // solidity label
    const solidL = document.createElement("label");
    solidL.for = "solidity";
    solidL.innerHTML = "Solidity";
    cont.appendChild(solidL);

    cont.appendChild(document.createElement("br"));

    // ---- Hardness ----
    const hard = document.createElement("input");
    hard.type = "number";
    hard.min = "-1";
    hard.id = "hardness";
    cont.appendChild(hard);

    const hardL = document.createElement("label");
    hardL.for = "hardness";
    hardL.innerHTML = "Hardness (-1 = Instant, 0 = Invincible)";
    cont.appendChild(hardL);

    cont.appendChild(document.createElement("br"));

    // ---- Digging Tool ----
    const dig = document.createElement("select");
    dig.id = "dig";
    dig.name = "dig";

    let none = document.createElement("option");
    none.value = "N";
    none.innerHTML = "None";
    dig.appendChild(none);

    let shove = document.createElement("option");
    shove.value = "S";
    shove.innerHTML = "Spade";
    dig.appendChild(shove);

    let axe = document.createElement("option");
    axe.value = "A";
    axe.innerHTML = "Axe";
    dig.appendChild(axe);

    let pic = document.createElement("option");
    pic.value = "P";
    pic.innerHTML = "Pickaxe";
    dig.appendChild(pic);

    let shear = document.createElement("option");
    shear.value = "H";
    shear.innerHTML = "Shears";
    dig.appendChild(shear);

    let sword = document.createElement("option");
    sword.value = "W";
    sword.innerHTML = "Sword";
    dig.appendChild(sword);

    let fas = document.createElement("option");
    fas.value = "F";
    fas.innerHTML = "Flint and Steel";
    dig.appendChild(fas);

    cont.appendChild(dig);

    const digStr = document.createElement("input");
    digStr.id = "dig-strength";
    digStr.type = "number";
    digStr.min = 0;
    digStr.value = 0;

    cont.appendChild(digStr);

    const digL = document.createElement("label");
    digL.for = "dig-strength";
    digL.innerHTML = "Digging Tool And Strength";
    cont.appendChild(digL);

    cont.appendChild(document.createElement("br"));

    const lHeight = document.createElement("input");
    lHeight.id = "liquid-height";
    lHeight.type = "number";
    lHeight.min = "0";
    lHeight.max = "9";
    lHeight.value = "0";
    cont.appendChild(lHeight);

    const lHeightL = document.createElement("label");
    lHeightL.for = "liquid-height";
    lHeightL.innerHTML = "Liquid Height";
    cont.appendChild(lHeightL);

    cont.appendChild(document.createElement("br"));

    // ---- Flow Direction ----
    const flowDir = document.createElement("select");
    flowDir.id = "flow-direction";
    flowDir.name = "flow-direction";

    let nonee = document.createElement("option");
    nonee.value = "N";
    nonee.innerHTML = "Nope";
    flowDir.appendChild(nonee);

    let source = document.createElement("option");
    source.value = ".";
    source.innerHTML = "Source Block";
    flowDir.appendChild(source);

    let left = document.createElement("option");
    left.value = "L";
    left.innerHTML = "Left";
    flowDir.appendChild(left);

    let right = document.createElement("option");
    right.value = "R";
    right.innerHTML = "Right";
    flowDir.appendChild(right);

    let down = document.createElement("option");
    down.value = "D";
    down.innerHTML = "Down";
    flowDir.appendChild(down);

    cont.appendChild(flowDir);

    const flowDirL = document.createElement("label");
    flowDirL.for = "flow-direction";
    flowDirL.innerHTML = "Flow Direction";

    cont.appendChild(flowDirL);

    cont.appendChild(document.createElement("br"));

    // ---- Gravity ----
    const canFall = document.createElement("select");
    canFall.id = "can-fall";
    canFall.name = "can-fall";

    no = document.createElement("option");
    no.value = "N";
    no.innerHTML = "No";
    canFall.appendChild(no);

    yes = document.createElement("option");
    yes.value = "Y";
    yes.innerHTML = "Yes";
    canFall.appendChild(yes);

    cef = document.createElement("option");
    cef.value = "X";
    cef.innerHTML = "Can't Float";
    canFall.appendChild(cef);

    wood = document.createElement("option");
    wood.value = "W";
    wood.innerHTML = "Must Be Near Wood";
    canFall.appendChild(wood);

    left = document.createElement("option");
    left.value = "L";
    left.innerHTML = "Attatched Left";
    canFall.appendChild(left);

    right = document.createElement("option");
    right.value = "R";
    right.innerHTML = "Attatched Right";
    canFall.appendChild(right);

    cont.appendChild(canFall);

    const canFallL = document.createElement("label");
    canFallL.for = "can-fall";
    canFallL.innerHTML = "Can Fall";

    cont.appendChild(canFallL);

    cont.appendChild(document.createElement("br"));

    // ---- Light Absorption ----
    const abs = document.createElement("input");
    abs.id = "absorption";
    abs.type = "number";
    abs.min = "-16";
    abs.max = "16";
    abs.value = "0";

    cont.appendChild(abs);

    const absL = document.createElement("label");
    absL.for = "absorption";
    absL.innerHTML = "Light Absorption (-# = light, 0 = pass, 16 = block)";

    cont.appendChild(absL);

    cont.appendChild(document.createElement("br"));

    // ---- Tile Group ----
    const tileGroup = document.createElement("input");
    tileGroup.id = "tile-group";
    tileGroup.type = "number";
    tileGroup.min = "-1";
    tileGroup.max = "31";
    tileGroup.value = "1";
    cont.appendChild(tileGroup);

    const tileGroupL = document.createElement("label");
    tileGroupL.for = "tile-group";
    tileGroupL.innerHTML = "Tile Group";
    cont.appendChild(tileGroupL);

    /*
  const tileGroupTT = document.createElement("span");
  tileGroupTT.className = "tooltip";
  tileGroupTT.innerHTML = "?";
  tileGroupTT.dataset.text = "1=Tool / 0=Unplaceable / 8=Unstackable Large / -1=Food / 10=Wood / 11=Door / 12=Spawn Egg / 13=Helmet / 14=Chestplate / 15=Leggings / 16=Boots / 20=Redstone hand or external / 22=Switch? / 30=Stair Left / 31=Stair Right";
  */

    cont.appendChild(
        generateTooltip(
            "?",
            "1=Tool / 0=Unplaceable / 8=Unstackable Large / -1=Food / 10=Wood / 11=Door / 12=Spawn Egg / 13=Helmet / 14=Chestplate / 15=Leggings / 16=Boots / 20=Redstone hand or external / 22=Switch? / 30=Stair Left / 31=Stair Right"
        )
    );

    cont.appendChild(document.createElement("br"));

    // ---- Harvest Block ----
    const hb = document.createElement("input");
    hb.id = "harvest-block";
    hb.type = "number";
    hb.value = "0";
    cont.appendChild(hb);

    const hbL = document.createElement("label");
    hbL.for = "harvest-block";
    hbL.innerHTML =
        "Harvest Block (0 = self, >1 = Block ID, -1 = Nothing, <-1 = Positive Block ID";
    cont.appendChild(hbL);

    cont.appendChild(document.createElement("br"));

    // ---- Smelt Into Block ----
    const smelt = document.createElement("input");
    smelt.type = "number";
    smelt.min = "0";
    smelt.value = "0";
    smelt.id = "smelt-into-id";
    cont.appendChild(smelt);

    const smeltL = document.createElement("label");
    smeltL.for = "smelt-into-id";
    smeltL.innerHTML = "Smelt Into Block Id (0 = None)";
    cont.appendChild(smeltL);

    cont.appendChild(document.createElement("br"));

    // ---- Smelt Duration ----

    const smeltDur = document.createElement("input");
    smeltDur.type = "number";
    smeltDur.min = "0";
    smeltDur.value = "0";
    smeltDur.id = "smelt-duration";
    cont.appendChild(smeltDur);

    const smeltDurL = document.createElement("label");
    smeltDurL.for = "smelt-duration";
    smeltDurL.innerHTML = "Smelting Duration";
    cont.appendChild(smeltDurL);

    cont.appendChild(document.createElement("br"));

    // ---- Damage ----

    const dam = document.createElement("input");
    dam.type = "number";
    dam.id = "damage";
    dam.min = "0";
    dam.max = "12";
    dam.value = "0";
    cont.appendChild(dam);

    const damL = document.createElement("label");
    damL.for = "damage";
    damL.innerHTML = "Damage Inflicted";
    cont.appendChild(damL);

    cont.appendChild(document.createElement("br"));

    // ---- Creative Tab ----
    const tab = document.createElement("select");
    tab.id = "creative-tab";
    tab.name = "creative tab";

    const notab = document.createElement("option");
    notab.value = "-1";
    notab.innerHTML = "None";
    tab.appendChild(notab);

    const buildblock = document.createElement("option");
    buildblock.value = "1";
    buildblock.innerHTML = "Building Blocks";
    tab.appendChild(buildblock);

    const decblock = document.createElement("option");
    decblock.value = "2";
    decblock.innerHTML = "Decoration Blocks";
    tab.appendChild(decblock);

    const redstn = document.createElement("option");
    redstn.value = "3";
    redstn.innerHTML = "Redstone";
    tab.appendChild(redstn);

    const misc = document.createElement("option");
    misc.value = "4";
    misc.innerHTML = "Miscellaneous";
    tab.appendChild(misc);

    const foods = document.createElement("option");
    foods.value = "5";
    foods.innerHTML = "Foodstuffs";
    tab.appendChild(foods);

    const tools = document.createElement("option");
    tools.value = "6";
    tools.innerHTML = "Tools";
    tab.appendChild(tools);

    const combat = document.createElement("option");
    combat.value = "7";
    combat.innerHTML = "Combat";
    tab.appendChild(combat);

    const mats = document.createElement("option");
    mats.value = "7";
    mats.innerHTML = "Materials";
    tab.appendChild(mats);

    cont.appendChild(tab);

    const tabL = document.createElement("label");
    tabL.for = "creative-tab";
    tabL.innerHTML = "Creative Tab";
    cont.appendChild(tabL);

    cont.appendChild(document.createElement("br"));

    // ---- Sprites ----
    const tileSprite = document.createElement("input");
    tileSprite.id = "ts-id";
    tileSprite.type = "number";
    tileSprite.min = 1;
    tileSprite.value = cID;
    cont.appendChild(tileSprite);

    const tsL = document.createElement("label");
    tsL.for = "ts-id";
    tsL.innerHTML = "Tile Sprite Costume Index";
    cont.appendChild(tsL);

    cont.appendChild(document.createElement("br"));

    const invSprite = document.createElement("input");
    invSprite.id = "is-id";
    invSprite.type = "number";
    invSprite.min = 1;
    invSprite.value = cID;
    cont.appendChild(invSprite);

    const isL = document.createElement("label");
    isL.for = "is-id";
    isL.innerHTML = "Inventory Sprite Costume Index";
    cont.appendChild(isL);

    cont.appendChild(document.createElement("br"));

    // ---- Durability ----
    const dur = document.createElement("input");
    dur.type = "number";
    dur.id = "durability";
    dur.min = 0;
    dur.value = 0;

    cont.appendChild(dur);

    const durL = document.createElement("label");
    durL.for = "durability";
    durL.innerHTML = "Item Durability";

    cont.appendChild(durL)

    cont.appendChild(document.createElement("br"));


    // ---- Root ID ----
    const rID = document.createElement("input");
    rID.type = "number";
    rID.max = bID;
    rID.id = "root-id";
    rID.value = bID;
    cont.appendChild(rID);

    const rIDl = document.createElement("label");
    rIDl.for = "root-id";
    rIDl.innerHTML = "Root Item ID (Same as ___ [for crafting, etc.])";
    cont.appendChild(rIDl);

    cont.appendChild(document.createElement("br"));


    // ---- Activate On Load ----
    const aol = document.createElement("select");
    aol.id = "aol";
    aol.name = "aol";

    const nope = document.createElement("option");
    nope.value = "N";
    nope.innerHTML = "Nope";
    aol.appendChild(nope);

    const grow = document.createElement("option");
    grow.value = "G";
    grow.innerHTML = "Grow";
    aol.appendChild(grow);

    const active = document.createElement("option");
    active.value = "A";
    active.innerHTML = "Activate";
    aol.appendChild(active);

    const burn = document.createElement("option");
    burn.value = "B";
    burn.innerHTML = "Burn (furnace)";
    aol.appendChild(burn);

    const reds = document.createElement("option");
    reds.value = "R";
    reds.innerHTML = "Redstone";
    aol.appendChild(reds);

    cont.appendChild(aol);

    const aolL = document.createElement("label");
    aolL.for = "aol";
    aolL.innerHTML = "Activate On Load";
    cont.appendChild(aolL);

    cont.appendChild(document.createElement("br"));

    document.getElementById("block-container").appendChild(cont);
    document.getElementById("block-container").appendChild(document.createElement("br"));
}

//input, label, br...

function read() {
    console.log(document.getElementsByClassName("block-div")[0].children);

    // copy data file
    let data_copy = block_data;

    // ----Get Values----

    // For each block
    for (var i of document.getElementsByClassName("block-div")) {
        i = i.children;
        bid = i[0].value;
        bn = i[3].value;
        bs = i[6].value;
        bh = i[9].value;
        bd = i[12].value;
        bds = i[13].value;
        blh = i[16].value;
        bfd = i[19].value;
        bg = i[22].value;
        bla = i[25].value;
        btg = i[28].value;
        bhg = i[32].value;
        bsb = i[35].value;
        bbd = i[38].value;
        bdam = i[41].value;
        bct = i[44].value;
        btsid = i[47].value;
        bisid = i[50].value;
        bdur = i[53].value;
        briid = i[56].value;
        baol = i[59].value;

        // edit data
        data_copy += "\n"; // add newline
        data_copy += bid + "\n";
        data_copy += bn + "\n";
        data_copy += bs + "\n";
        data_copy += bh + "\n";
        data_copy += bd + bds + "\n";
        data_copy += blh + "\n";
        data_copy += bfd + "\n";
        data_copy += bg + "\n";
        data_copy += bla + "\n";
        data_copy += btg + "\n";
        data_copy += bhg + "\n";
        data_copy += bsb + "\n";
        data_copy += bbd + "\n";
        data_copy += bdam + "\n";
        data_copy += bct + "\n";
        data_copy += btsid + "\n";
        data_copy += bisid + "\n";
        data_copy += bdur + "\n";
        data_copy += briid + "\n";
        data_copy += baol + "\n";
        console.log(data_copy);
    }

    // readd eof whitespace
    for (var i = 0; i < 16; i++) {
        data_copy += "\n";
    }

    // download edited data file
    download("_BLOCK_DATA.txt", data_copy);
}
